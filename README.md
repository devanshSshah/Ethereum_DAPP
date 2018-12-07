# Ethereum_DAPP


###Start a network::
   
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
