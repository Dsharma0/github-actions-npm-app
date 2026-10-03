#!/usr/bin/env bash
set -euo pipefail

cat /etc/os-release

date

id

echo "this is all. done"

sleep 5
echo "I slept for 5 seconds"
if [ "$(id -u)" -eq 0 ]; then
  echo "I'm root"
  else
  echo "I'm not root, I'm ${USER:-unset}"
fi

sleep 10
echo "I slept for 10 seconds"
if [ "$(id -u)" -eq 0 ]; then
  echo "I'm root again"
else
  echo "I'm not root"
fi
if [ "${USER:-}" = "root" ]; then
  echo "USER is root"
else
  echo "USER is ${USER:-unset}"
fi

sudo apt-get update
sudo apt-get install -y cowsay

cowsay -f dragon "I'm a dragon" >> dragon.txt
cat dragon.txt
