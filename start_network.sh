#!/bin/bash


#echo "[*] Starting Ethereum nodes with ChainID and NetworkId of 10"
set -v
nohup ./bin/geth --datadir qdata/ddA --networkid 10 --rpc --rpccorsdomain="*" --rpcaddr 127.0.0.1 --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3 --rpcport 27000 --port 21000 --unlock 0 --password passwords.txt &
nohup ./bin/geth --datadir qdata/ddB --networkid 10 --rpc --rpccorsdomain="*" --rpcaddr 127.0.0.1 --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3 --rpcport 27001 --port 21001 --unlock 0 --password passwords.txt &
nohup ./bin/geth --datadir qdata/ddC --networkid 10 --rpc --rpccorsdomain="*" --rpcaddr 127.0.0.1 --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3 --rpcport 27002 --port 21002 --unlock 0 --password passwords.txt &

set +v

echo
echo "All nodes configured. And run e.g. './bin/geth attach qdata/ddA/geth.ipc' to attach to the Geth nodes."

exit 0
