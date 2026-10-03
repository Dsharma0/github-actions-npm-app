#!/usr/bin/env bash
set -euo pipefail

sudo apt-get update
sudo apt-get install -y cowsay

cowsay -f dragon "I'm a dragon" >> dragon.txt
cat dragon.txt
ls -la
echo "only this workflow will run"
