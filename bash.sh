#!/usr/bin/env bash
set -euo pipefail

sudo apt-get update
sudo apt-get install -y cowsay

cowsay -f dragon "I'm a dragon" >> dragon.txt
cat dragon.txt
cowthink -f elephant "I'm an elephant" >> elephant.txt
cat elephant.txt
ls -la
echo "only this workflow will run"
