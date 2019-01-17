pragma solidity ^0.4.20;

contract Auction {

  address companyA;
  address companyB;
  address companyC;
  uint itemPrice;
  mapping(address=>uint) bids;
  
  function Auction(address _addressA,address _addressB,address _addressC) public payable {
      companyA=_addressA;
      companyB=_addressB;
      companyC=_addressC;
      
  }
  
  function () public payable {
  }
    
  function setItem( uint _price){
     require(msg.sender==companyA);
     itemPrice = _price;
  }

  function getItemPrice() public returns (uint itemPrice){
	    return itemPrice;
  }
   
   function getBid(address _address) returns (uint bidAmt){
	    require(msg.sender == companyA);
	    return bids[_address];
  }
  
  function selectBidder() payable returns (bool){
      require(msg.sender == companyA);
      uint bidbyB = bids[companyB];
      uint bidbyC = bids[companyC];
      uint winner;
      uint loser;
      address returnaddress;
      if(bidbyB > bidbyC)
      {
          winner = bidbyB * 10^18;
          loser = bidbyC * 10^18;
          returnaddress = companyC;
      }else{
          winner = bidbyC * 10^18;
          loser = bidbyB * 10^18;
          returnaddress = companyB;
      }
      bool res = address(companyA).send(winner);
      bool res2 = address(returnaddress).send(loser);
      bool finalres = res && res2;
      return finalres;
      
      
  }
  

  function bid(uint _bidAmt) public payable returns (bool) {
       require(msg.sender == companyB || msg.sender == companyC);
    // require(msg.value == _bidAmt * 10^18);
       bids[msg.sender] = _bidAmt;
       bool res = this.send(msg.value);
       return res;
    }
    
    function checkContractbalance() public returns (uint balance) {
        return this.balance;
    }   

}
