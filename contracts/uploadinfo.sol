 pragma solidity ^0.4.23;
contract Ownable {
  address public owner;


  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);


  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  constructor() public {
    owner = msg.sender;
  }


  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }
}
contract uploadinfo is Ownable {
    struct detail {
        string theHash;
        uint256 size;
    }
    mapping(address=>mapping(uint8=>detail)) public  AddressToDetail;
    mapping(address=>uint8) private currentIndex;
    function addHash(string str,address _add,uint256 size) public {
        uint8 curr=currentIndex[_add];
        AddressToDetail[_add][curr]=detail(str,size);
        curr++;
        currentIndex[_add]=curr;
    }
    function getCounter(address _add) view public returns(uint8) {
        return currentIndex[_add];
    }
    function getHash(address _add,uint8 ind) view public returns(string,uint256){
        return (AddressToDetail[_add][ind].theHash,AddressToDetail[_add][ind].size);
    }
}
