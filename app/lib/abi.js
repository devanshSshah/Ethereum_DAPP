var abiArray = [{ "constant": true, "inputs": [], "name": "getPeople", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_fname", "type": "bytes32" }, { "name": "_lname", "type": "bytes32" }], "name": "addPerson", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "people", "outputs": [{ "name": "firstname", "type": "bytes32" }, { "name": "lastname", "type": "bytes32" }], "payable": false, "type": "function" }];


var abiArray2 = [{ "constant": true, "inputs": [{ "name": "value", "type": "string" }, { "name": "para", "type": "uint256" }], "name": "getPeople", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "bytes32[]" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "_fname", "type": "bytes32" }, { "name": "_lname", "type": "bytes32" }, { "name": "_mobileNo", "type": "uint256" }, { "name": "_AdharNumber", "type": "uint256" }, { "name": "_ResAddress", "type": "bytes32" }], "name": "addPerson", "outputs": [{ "name": "result", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "data", "type": "bytes32" }], "name": "bytes32ToString", "outputs": [{ "name": "", "type": "string" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "v", "type": "uint256" }], "name": "uintToBytes", "outputs": [{ "name": "ret", "type": "bytes32" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "people", "outputs": [{ "name": "firstname", "type": "bytes32" }, { "name": "lastname", "type": "bytes32" }, { "name": "mobileNo", "type": "uint256" }, { "name": "AdharNumber", "type": "uint256" }, { "name": "ResAddress", "type": "bytes32" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getPeopleAll", "outputs": [{ "name": "", "type": "bytes32[]" }, { "name": "", "type": "bytes32[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "bytes32[]" }], "payable": false, "type": "function" }];


var bid = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_bidAmt",
				"type": "uint256"
			}
		],
		"name": "bid",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "checkContractbalance",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
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
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getItemPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "selectBidder",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
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
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	}
]


var bytes = "0x606060405260405160608061078383398101604052808051906020019091908051906020019091908051906020019091905050826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505061067d806101066000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806316ffbee91461007a5780632083ad821461009c578063454a2ab3146100c5578063497cdd9a146100f5578063822a634a1461011e578063c8b342ab14610141575b005b61008261018e565b604051808215151515815260200191505060405180910390f35b34156100a757600080fd5b6100af6103e4565b6040518082815260200191505060405180910390f35b6100db60048080359060200190919050506103ee565b604051808215151515815260200191505060405180910390f35b341561010057600080fd5b610108610529565b6040518082815260200191505060405180910390f35b341561012957600080fd5b61013f6004808035906020019091905050610548565b005b341561014c57600080fd5b610178600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105ad565b6040518082815260200191505060405180910390f35b60008060008060008060008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101f757600080fd5b60046000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054975060046000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054965086881115610303576012600a89021895506012600a8802189450600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16935061033b565b6012600a88021895506012600a8902189450600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1693505b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc879081150290604051600060405180830381858888f1935050505092508373ffffffffffffffffffffffffffffffffffffffff166108fc869081150290604051600060405180830381858888f1935050505091508280156103d45750815b9050809850505050505050505090565b6000600354905090565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061049a5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156104a557600080fd5b82600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050905080915050919050565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105a357600080fd5b8060038190555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561060a57600080fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820a20f845208d99dccd234e82aa57331bd6c697658e15c102be0089dd6c25e19ab0029";


