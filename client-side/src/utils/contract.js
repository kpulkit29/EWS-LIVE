import web3 from "./getWeb3";
const address='0x1134eeca4014d315b07d36eddbb5a71ff458987f';
const abi=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "str",
				"type": "string"
			},
			{
				"name": "_add",
				"type": "address"
			},
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"name": "addHash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint8"
			}
		],
		"name": "AddressToDetail",
		"outputs": [
			{
				"name": "theHash",
				"type": "string"
			},
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_add",
				"type": "address"
			}
		],
		"name": "getCounter",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_add",
				"type": "address"
			},
			{
				"name": "ind",
				"type": "uint8"
			}
		],
		"name": "getHash",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
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
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export default new web3.eth.Contract(abi, address);