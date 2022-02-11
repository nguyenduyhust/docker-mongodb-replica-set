#!/usr/bin/env bash

if [ ! -f /data/mongo-init.flag ]; then
    echo "Init replicaset"
    mongo mongodb://mongodb1:27011 mongo-setup.js
    touch /data/mongo-init.flag
else
    echo "Replicaset already initialized"
fi
