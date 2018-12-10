var abiArray = [{ "constant": true, "inputs": [], "name": "getPeople", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_fname", "type": "bytes32" }, { "name": "_lname", "type": "bytes32" }], "name": "addPerson", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "people", "outputs": [{ "name": "firstname", "type": "bytes32" }, { "name": "lastname", "type": "bytes32" }], "payable": false, "type": "function" }];


var abiArray2 = [{ "constant": true, "inputs": [{ "name": "value", "type": "string" }, { "name": "para", "type": "uint256" }], "name": "getPeople", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "bytes32[]" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_fname", "type": "bytes32" }, { "name": "_lname", "type": "bytes32" }, { "name": "_mobileNo", "type": "uint256" }, { "name": "_AdharNumber", "type": "uint256" }, { "name": "_ResAddress", "type": "bytes32" }], "name": "addPerson", "outputs": [{ "name": "result", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "data", "type": "bytes32" }], "name": "bytes32ToString", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "v", "type": "uint256" }], "name": "uintToBytes", "outputs": [{ "name": "ret", "type": "bytes32" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "people", "outputs": [{ "name": "firstname", "type": "bytes32" }, { "name": "lastname", "type": "bytes32" }, { "name": "mobileNo", "type": "uint256" }, { "name": "AdharNumber", "type": "uint256" }, { "name": "ResAddress", "type": "bytes32" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getPeopleAll", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "bytes32[]" }], "payable": false, "type": "function" }];


var bid = [
	{
		"constant": true,
		"inputs": [],
		"name": "getItemPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_bidAmt",
				"type": "uint256"
			}
		],
		"name": "bid",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setItem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getBid",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_addressA",
				"type": "address"
			},
			{
				"name": "_addressB",
				"type": "address"
			},
			{
				"name": "_addressC",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]



var bytes = "0x6060604052341561000f57600080fd5b60405160608061046e83398101604052808051906020019091908051906020019091908051906020019091905050826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505061035d806101116000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632083ad8214610067578063454a2ab314610090578063822a634a146100b3578063c8b342ab146100d6575b600080fd5b341561007257600080fd5b61007a610123565b6040518082815260200191505060405180910390f35b341561009b57600080fd5b6100b1600480803590602001909190505061012d565b005b34156100be57600080fd5b6100d46004808035906020019091905050610228565b005b34156100e157600080fd5b61010d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061028d565b6040518082815260200191505060405180910390f35b6000600354905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806101d65750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156101e157600080fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561028357600080fd5b8060038190555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156102ea57600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820d9d31768d676f3c1eec3ad6fd777558cf0b00729a8c32c339bcd32714b0a41db0029";


