// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract ERC20BurnableToken is ERC20, ERC20Burnable {
    uint8 private _decimals;

    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_
    ) ERC20(name_, symbol_) {
        _decimals = decimals_;
        _mint(msg.sender, 1000000 * 10 ** decimals_);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    function transfer(
        address to,
        uint256 value
    ) public override returns (bool) {
        require(value > 0, "ERC20: transfer amount must be greater than zero");
        require(
            balanceOf(msg.sender) >= value,
            "ERC20: transfer amount exceeds balance"
        );

        _update(msg.sender, to, value);
        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) public override returns (bool) {
        require(value > 0, "ERC20: transfer amount must be greater than zero");
        require(
            balanceOf(from) >= value,
            "ERC20: transfer amount exceeds balance"
        );

        _spendAllowance(from, msg.sender, value);
        _update(from, to, value);
        return true;
    }
}
