#!/bin/bash
set -e

# 发布
VERSION=`cat package.json | grep version | awk -F: '{print $2}' | sed s/[\",\ ]//g`
TAG_REVERSE=`cat package.json | grep version | awk -F: '{print $2}' | sed s/[\",\ ]//g | awk -F- '{print $2"-"$1}'`
echo "package.json版本号${VERSION}，alpha会进行反转为${TAG_REVERSE}"
read -p "确定要发布吗？[Y/y]" -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]
then
npm publish --tag ${TAG_REVERSE}
echo "\033[36m发布完毕\033[0m" 
else
echo "tag无效"
fi
