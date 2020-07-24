// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Sandbox {
  string public message;

  constructor() public {
    message = "Hi";
  }

  function setMessage(string memory newMessage) public {
    message = newMessage;
  }
}