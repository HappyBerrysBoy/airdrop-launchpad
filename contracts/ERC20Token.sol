// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
    constructor(
        string memory name_,
        string memory symbol_
    ) ERC20(name_, symbol_) {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
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
