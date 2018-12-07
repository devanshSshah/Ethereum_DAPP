a = eth.accounts[0]
web3.eth.defaultAccount = a;

var abi=[{
		"constant": false,
		"inputs": [],
		"name": "getItemPrice",
		"outputs": [{"name": "","type": "uint256"}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},{
		"constant": false,
		"inputs": [{"name": "_bidAmt","type": "uint256"}],
		"name": "bid",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},{	
		"constant": false,
		"inputs": [{"name": "_price","type": "uint256"}],
		"name": "setItem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},{
		"constant": false,
		"inputs": [{"name": "_address","type": "address"}],
		"name": "getBid",
		"outputs": [{"name": "","type": "uint256"}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},{
		"inputs": [{"name": "_addressA","type": "address"},
			{"name": "_addressB","type": "address"},
			{"name": "_addressC","type": "address"}],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}];

var bytecode = "0x6060604052341561000f57600080fd5b60405160608061046e83398101604052808051906020019091908051906020019091908051906020019091905050826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505061035d806101116000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632083ad8214610067578063454a2ab314610090578063822a634a146100b3578063c8b342ab146100d6575b600080fd5b341561007257600080fd5b61007a610123565b6040518082815260200191505060405180910390f35b341561009b57600080fd5b6100b1600480803590602001909190505061012d565b005b34156100be57600080fd5b6100d46004808035906020019091905050610228565b005b34156100e157600080fd5b61010d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061028d565b6040518082815260200191505060405180910390f35b6000600354905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806101d65750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156101e157600080fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561028357600080fd5b8060038190555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156102ea57600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820b9ed42229fc2479d033754ebbd1d1df7f95c0a52f49a6aed173fa18cac0500f70029";

var Contract = web3.eth.contract(abi);
var deployContract = Contract.new({from:web3.eth.accounts[0], data: bytecode, gas: 0x47b760}, function(e, contract) {
	if (e) {
		console.log("err creating contract", e);
	} else {
		if (!contract.address) {
			console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
		} else {
			console.log("Contract mined! Address: " + contract.address);
			console.log(contract);
		}
	}
});