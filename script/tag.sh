#!/bin/zsh

# package.json 의 version 불러오기 (오류 시 쉘스크립트 종료)
if ! NEW_TAG=$(node <<EOF 2>/dev/null
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'package.json');
let packageJson;

try {
  packageJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  console.log(packageJson.version);
} catch (err) {
  process.exit(1);
}
EOF
); then
  echo "❌ package.json 읽는 중 오류가 발생되어 스크립트를 종료합니다."
  exit 1
fi

echo "새로 생성할 태그 버전 : $NEW_TAG"

# 기존에 동일한 태그 & latest 있으면 삭제
git tag -d "$NEW_TAG"
git push -d origin "$NEW_TAG"
git tag -d latest
git push -d latest

git tag -a "$NEW_TAG" -m "Release $NEW_TAG"
git push origin "$NEW_TAG"
git tag latest
git push latest

echo "⭕ upload tag done"