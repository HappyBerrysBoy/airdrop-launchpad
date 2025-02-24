// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./lib/AccessControl.sol";

contract Spinner is AccessControl, ReentrancyGuard {
    // Constants
    uint256 public constant PRECISION = 1e18; // KAIA decimals
    uint256 public constant MAX_PROBABILITY = 100000000;
    uint256 public freeSpinPerDay = 100;
    uint256 public rechargeBlockInterval = 86400;

    uint16 public totalSegments; // Total number of segments in wheel
    address public feeRelayer; // Relayer address for fee collection
    uint256 public countPerKaia; // Number of spins per kaia

    // State variables
    mapping(uint16 => uint64) public segmentAmounts; // Amount allocated to each segment
    mapping(uint16 => uint64) public segmentRemaining; // Remaining amount for each segment
    mapping(uint16 => uint64) public segmentProbabilities; // Probability for each segment (in basis points, 1-100000000)
    uint256 public totalSpins; // Total number of spins performed
    uint256 public startBlock; // Block number when spinning starts
    uint256 public endBlock; // Block number when spinning ends

    // User spin tracking
    mapping(address => uint256) public lastRechargeBlock; // Block number when user requested recharge
    mapping(address => uint256) public userSpinsAvailable; // Number of spins available for user
    mapping(address => uint64) public userSpinCount; // Number of spins per user
    mapping(address => mapping(uint256 => uint256)) public userSegmentHits; // Number of hits per segment per user

    // Events
    event SpinResult(
        address indexed user,
        uint256 segment,
        uint256 randomNumber,
        uint256 timestamp
    );

    event RechargeSpins(address indexed user, uint256 blockNumber);

    // event DepositKaia(address indexed user, uint256 amount);

    constructor(
        uint16 _totalSegments,
        address _feeRelayer,
        uint256 _countPerKaia
    ) {
        _grantRole(ADMIN_ROLE, msg.sender);
        totalSegments = uint16(_totalSegments);
        feeRelayer = _feeRelayer;
        countPerKaia = _countPerKaia;
        startBlock = 0;
        endBlock = 0;
    }

    /**
     * @notice Set the fee relayer address
     * @param _feeRelayer The address of the fee relayer
     */
    function setFeeRelayer(address _feeRelayer) external onlyRole(ADMIN_ROLE) {
        feeRelayer = _feeRelayer;
    }

    /**
     * @notice Set the number of spins per kaia
     * @param _countPerKaia The number of spins per kaia
     */
    function setCountPerKaia(
        uint256 _countPerKaia
    ) external onlyRole(ADMIN_ROLE) {
        countPerKaia = _countPerKaia;
    }

    /**
     * @notice Set the number of free spins per day
     * @param _freeSpinsPerDay The number of free spins per day
     */
    function setFreeSpinsPerDay(
        uint256 _freeSpinsPerDay
    ) external onlyRole(ADMIN_ROLE) {
        freeSpinPerDay = _freeSpinsPerDay;
    }

    /**
     * @notice Set the recharge block interval
     * @param _rechargeBlockInterval The interval in blocks between recharge
     */
    function setRechargeBlockInterval(
        uint256 _rechargeBlockInterval
    ) external onlyRole(ADMIN_ROLE) {
        rechargeBlockInterval = _rechargeBlockInterval;
    }

    /**
     * @notice Recharge user's free spins based on block interval
     * @param user Address of the user to recharge spins for
     */
    function rechargeSpins(address user) public {
        require(
            msg.sender == user || hasRole(ADMIN_ROLE, msg.sender),
            "Only user or admin can recharge spins"
        );

        // Get the number of intervals passed since last recharge
        uint256 currentBlock = block.number;
        uint256 blocksSinceLastRecharge = currentBlock -
            lastRechargeBlock[user];

        require(
            blocksSinceLastRecharge >= rechargeBlockInterval,
            "Not enough time has passed since last recharge"
        );

        userSpinsAvailable[user] += freeSpinPerDay;
        lastRechargeBlock[user] = currentBlock;

        emit RechargeSpins(user, currentBlock);
    }

    /**
     * @notice Get the last recharge block for a user
     * @param user Address of the user to get the last recharge block for
     * @return lastRechargeBlock The last recharge block for the user
     * @return currentBlock The current block height
     */
    function getLastRechargeBlock(
        address user
    ) external view returns (uint256, uint256) {
        return (lastRechargeBlock[user], block.number);
    }

    /**
     * @notice Get the number of spins available for a user
     * @param user Address of the user to get the number of spins available for
     * @return userSpinsAvailable The number of spins available for the user
     */
    function getUserSpinsAvailable(
        address user
    ) external view returns (uint256) {
        return userSpinsAvailable[user];
    }

    // /**
    //  * @notice Deposit kaia
    //  * @dev kaia가 1 미만이면 revert
    //  */
    // function depositKaia() external payable {
    //     // kaia가 1 미만이면 revert
    //     require(msg.value >= 1, "Deposit amount must be greater than 0");

    //     userSpinsAvailable[msg.sender] += uint256(
    //         (countPerKaia * msg.value) / PRECISION
    //     );

    //     // 받은 수수료를 feeRelayer에 전송
    //     payable(feeRelayer).transfer(msg.value);

    //     emit DepositKaia(msg.sender, msg.value);
    // }

    /**
     * @notice Set amounts and probabilities for wheel segments
     * @param amounts Array of amounts for each segment
     * @param probabilities Array of probabilities for each segment (1-100000000)
     */
    function setSegmentAmounts(
        uint64[] calldata amounts,
        uint64[] calldata probabilities
    ) external onlyRole(ADMIN_ROLE) {
        require(amounts.length == probabilities.length, "Length mismatch");

        require(
            probabilities[probabilities.length - 1] == MAX_PROBABILITY,
            "Last probability must be 100000000"
        );

        for (uint16 i = 0; i < amounts.length; i++) {
            segmentAmounts[i] = amounts[i];
            segmentRemaining[i] = amounts[i];
            segmentProbabilities[i] = probabilities[i];
        }
    }

    /**
     * @notice Get amounts for all segments
     * @return amounts Array of amounts
     */
    function getSegmentAmounts()
        external
        view
        returns (uint64[] memory amounts)
    {
        amounts = new uint64[](totalSegments);
        for (uint16 i = 0; i < totalSegments; i++) {
            amounts[i] = uint64(segmentAmounts[uint16(i)]);
        }
    }

    /**
     * @notice Get remaining amounts for all segments
     * @return amounts Array of remaining amounts
     */
    function getRemainingAmounts()
        external
        view
        returns (uint64[] memory amounts)
    {
        amounts = new uint64[](totalSegments);
        for (uint16 i = 0; i < totalSegments; i++) {
            amounts[i] = uint64(segmentRemaining[uint16(i)]);
        }
    }

    /**
     * @notice Get probabilities for all segments
     * @return probabilities Array of probabilities
     */
    function getProbabilities()
        external
        view
        returns (uint64[] memory probabilities)
    {
        probabilities = new uint64[](totalSegments);
        for (uint16 i = 0; i < totalSegments; i++) {
            probabilities[i] = uint64(segmentProbabilities[uint16(i)]);
        }
    }

    /**
     * @notice Set total number of segments
     * @param _totalSegments New total segments value
     */
    function setTotalSegments(
        uint16 _totalSegments
    ) external onlyRole(ADMIN_ROLE) {
        require(_totalSegments > 0, "Total segments must be greater than 0");
        totalSegments = _totalSegments;
    }

    function isActive() public view returns (bool) {
        return
            startBlock != 0 &&
            block.number >= startBlock &&
            (endBlock == 0 || block.number <= endBlock);
    }

    /**
     * @notice Spin the wheel
     * @return segment The landed segment number
     * @return randomNumber The random number generated
     */
    function spin()
        external
        nonReentrant
        returns (uint16 segment, uint256 randomNumber)
    {
        require(isActive(), "Spinner not active");
        require(userSpinsAvailable[msg.sender] > 0, "No spins available");

        bool validSegmentFound = false;
        uint256 attempts = 0;
        uint256 maxAttempts = 30;

        while (!validSegmentFound && attempts < maxAttempts) {
            // Generate random number between 1-MAX_PROBABILITY
            randomNumber =
                (uint256(
                    keccak256(
                        abi.encodePacked(
                            block.timestamp,
                            block.prevrandao,
                            msg.sender,
                            totalSpins,
                            attempts
                        )
                    )
                ) % MAX_PROBABILITY) +
                1;

            for (uint16 i = 0; i < totalSegments && !validSegmentFound; i++) {
                if (randomNumber <= segmentProbabilities[i]) {
                    // Check if segment has available amount
                    if (segmentAmounts[i] == 0 || segmentRemaining[i] > 0) {
                        validSegmentFound = true;
                        segment = i;
                        totalSpins++;

                        if (segmentRemaining[i] > 0) {
                            segmentRemaining[i]--;
                        }
                        break;
                    }
                }
            }

            attempts++;
        }

        require(
            validSegmentFound,
            "No valid segments available after 30 attempts"
        );

        // Update user spin tracking
        userSpinCount[msg.sender]++;
        userSegmentHits[msg.sender][segment]++;
        userSpinsAvailable[msg.sender]--;

        emit SpinResult(msg.sender, segment, randomNumber, block.timestamp);
    }

    /**
     * @notice Set spinner block range
     * @param _startBlock Block number when spinning starts
     * @param _endBlock Block number when spinning ends (0 for no end)
     */
    function setBlockRange(
        uint256 _startBlock,
        uint256 _endBlock
    ) external onlyRole(ADMIN_ROLE) {
        require(
            _startBlock >= block.number,
            "Start block must be in the future"
        );
        require(
            _endBlock == 0 || _endBlock > _startBlock,
            "End block must be after start block"
        );
        startBlock = _startBlock;
        endBlock = _endBlock;
    }

    // get user's spin count
    function getUserSpinCount(address user) external view returns (uint64) {
        return userSpinCount[user];
    }

    // get user's segment hits
    function getUserSegmentHits(
        address user,
        uint16 segment
    ) external view returns (uint256) {
        return userSegmentHits[user][segment];
    }

    // get user's segment hits for all segments
    function getUserSegmentHitsAll(
        address user
    ) external view returns (uint256[] memory) {
        uint256[] memory hits = new uint256[](totalSegments);
        for (uint16 i = 0; i < totalSegments; i++) {
            hits[i] = userSegmentHits[user][i];
        }
        return hits;
    }
}
