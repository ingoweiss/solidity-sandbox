// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Sandbox {
  string public message;

  constructor(string memory initialMessage) public {
    message = initialMessage;
  }

  function setMessage(string memory newMessage) public {
    message = newMessage;
  }
}