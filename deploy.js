const HDWalletProvider = require("@truffle/hdwallet-provider")
const { prototype } = require("mocha")
const Web3 = require("web3")
const { interface, bytecode } = require("./compile")
const { key_phrase } = require("./env/details")
const provider = new HDWalletProvider(
    key_phrase, 
    "https://rinkeby.infura.io/v3/d188fcc66c194663b195626d5d920ec8"
)
const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ["Hello World"]})
        .send({gas: "1000000", from: accounts[0]})
    console.log("Contract deployed to: ", result.options.address)
    provider.engine.stop()
}

deploy()