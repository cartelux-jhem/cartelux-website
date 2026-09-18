#!/usr/bin/env bash
set -euo pipefail

rm -rf dist
mkdir -p dist

for page in *.php; do
  php "$page" > "dist/${page%.php}.html"
done

cp -r css js images fonts dist/
cp .htaccess dist/ 2>/dev/null || true
