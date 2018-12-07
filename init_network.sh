#!/bin/bash

rm -rf qdata
killall -QUIT geth 

echo "                                     "
echo "[*] Configuring node A "
echo "                                     "
mkdir -p qdata/ddA/{keystore,geth}
cp static-nodes.json qdata/ddA/static-nodes.json
cp keys/key1 qdata/ddA/keystore
cp nodekeys/nodekey1 qdata/ddA/geth/nodekey
./bin/geth --datadir qdata/ddA init genesis.json

echo "                                     "
echo "[*] Configuring node B"
echo "                                     "
mkdir -p qdata/ddB/{keystore,geth}
cp static-nodes.json qdata/ddC/static-nodes.json
cp keys/key2 qdata/ddB/keystore
cp nodekeys/nodekey2 qdata/ddB/geth/nodekey
./bin/geth --datadir qdata/ddB init genesis.json

echo "                                     "
echo "[*] Configuring node C "
echo "                                     "
mkdir -p qdata/ddC/{keystore,geth}
cp static-nodes.json qdata/ddC/static-nodes.json
cp keys/key3 qdata/ddC/keystore
cp nodekeys/nodekey3 qdata/ddC/geth/nodekey
./bin/geth --datadir qdata/ddC init genesis.json




