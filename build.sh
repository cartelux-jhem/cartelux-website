#!/usr/bin/env bash
set -euo pipefail

rm -rf dist
mkdir -p dist

php index.php > dist/index.html
php request-demo.php > dist/request-demo.html

cp -r css js images fonts dist/
cp .htaccess dist/ 2>/dev/null || true
