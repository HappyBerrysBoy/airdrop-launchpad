// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "./lib/AccessControl.sol";
import "./Airdrop.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

contract AirdropFactory is AccessControl {
    struct AirdropInfo {
        address airdrop; // 에어드랍 주소
        address token; // 에어드랍 토큰 주소
        uint256 startTimestamp; // 에어드랍 시작 시간
        uint256 endTimestamp; // 에어드랍 종료 시간
        uint256 tgePercent; // TGE 토큰 비율
        uint256 vestingCount; // TGE 이후 클레임 횟수
    }

    uint256 public airdropLength;
    mapping(address => uint256) public airdrops;
    mapping(uint256 => AirdropInfo) public airdropInfo;

    event AirdropCreated(
        address indexed airdrop,
        address indexed token,
        uint256 startTimestamp,
        uint256 endTimestamp
    );

    constructor() {
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    /**
     * @notice 에어드랍 컨트랙트를 생성합니다.
     * @param token 에어드랍 토큰 주소
     * @param startTimestamp 에어드랍 시작 시간
     * @param endTimestamp 에어드랍 종료 시간
     * @param tgePercent TGE 토큰 비율
     * @param vestingCount TGE 이후 클레임 횟수
     * @return 생성된 에어드랍 컨트랙트의 id
     */
    function createAirdrop(
        address token,
        uint256 startTimestamp,
        uint256 endTimestamp,
        uint256 tgePercent,
        uint64 vestingCount
    ) public onlyRole(ADMIN_ROLE) returns (uint256) {
        require(
            tgePercent == 100 ? vestingCount == 0 : true,
            "TGE_100_PERCENT_MUST_HAVE_NO_VESTING"
        );
        require(
            tgePercent < 100 ? vestingCount > 0 : true,
            "TGE_LESS_THAN_100_MUST_HAVE_VESTING"
        );

        airdropLength++;

        uint256 precision = 10 ** IERC20Metadata(token).decimals();

        Airdrop newAirDrop = new Airdrop(
            token,
            startTimestamp,
            endTimestamp,
            tgePercent,
            vestingCount,
            precision
        );
        newAirDrop.grantRole(ADMIN_ROLE, msg.sender);

        address airdropAddress = address(newAirDrop);
        airdrops[airdropAddress] = airdropLength;
        airdropInfo[airdropLength] = AirdropInfo({
            airdrop: airdropAddress,
            token: token,
            startTimestamp: startTimestamp,
            endTimestamp: endTimestamp,
            tgePercent: tgePercent,
            vestingCount: vestingCount
        });

        emit AirdropCreated(
            airdropAddress,
            token,
            startTimestamp,
            endTimestamp
        );

        return airdropLength;
    }

    /**
     * @notice 모든 에어드랍 정보를 조회합니다.
     * @return 모든 에어드랍 정보
     */
    function getAllAirdrops() external view returns (AirdropInfo[] memory) {
        AirdropInfo[] memory result = new AirdropInfo[](airdropLength);
        for (uint256 i = 1; i <= airdropLength; i++) {
            result[i - 1] = airdropInfo[i];
        }
        return result;
    }

    /**
     * @notice 특정 에어드랍 정보를 조회합니다.
     * @param airdrop 에어드랍 주소
     */
    function getAirdropByAddress(
        address airdrop
    ) external view returns (AirdropInfo memory) {
        return airdropInfo[airdrops[airdrop]];
    }
}
