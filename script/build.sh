#!/bin/zsh


rm -rf ./dist

tsc -p tsconfig.export.json;
tsc-alias -p tsconfig.export.json --verbose;
rm ./**/tsconfig.export.tsbuildinfo;

pnpm git add .;
