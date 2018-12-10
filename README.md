# Ethereum_DAPP


### Start a network::
   
   First run the initialization script as ``` ./init-network.sh```.
   This will create genesis blocks for our network.
   Then run the network script as ``` ./start-network.sh```.


### Running the Quorum nodes

  We can inspect any of the Quorum nodes by using `geth attach` to open the Geth JavaScript console. Node A, Node B and Node C.  

It is recommended to use separate terminal windows for each node we are inspecting.  In each terminal, ensure you are in the `path/to/clonedRepo` directory, then:

- If you aren't already running the example, in terminal 1 run `./init-network.sh` followed by `./start-network.sh`
- In terminal 1 run `./bin/geth attach ipc:qdata/ddA/geth.ipc` to attach to node A
- In terminal 2 run `./bin/geth attach ipc:qdata/ddB/geth.ipc` to attach to node B
- In terminal 3 run `./bin/geth attach ipc:qdata/ddC/geth.ipc` to attach to node C

Now start mining in any of the nodes by using the following command:
 ``` miner.start(4) ```.

### Running the Application:

### Selling:
Open the `index`(in the app folder) page in any browser.

Then go to the seller page. Here first create a contract(i.e. deploy a contract) through the Contract Create Button.
 The transaction hash will be displayed and followed by the contract address. NOTE : If you havent started the mining in any nodes, please do so!! 

Then set the Item Price.

### Bidding:

Now go the buyer A page. Here all the details(i.e. contract address, item price) will be shown. 

Now place your bid against the price already set by the seller and reload the page to update the page details.

Do the same things with different bid price on the buyer C page.

### Getting Bid Info:

Go back to the Seller page where all the information will be displayed.