#!/bin/bash
set -eu

PLATFORM=$1

yarn build

if [ -d "$PLATFORM" ]; then
  rm -r $PLATFORM
fi

npx cap add $PLATFORM

npx cap sync

if [[ $PLATFORM = ios ]]; then
  cp ./cli-build/Info.plist ./ios/App/App
else
  cp ./cli-build/AndroidManifest.xml ./android/app/src/main
fi

npx @capacitor/assets generate --assetPath ./dist  $PLATFORM

npx cap open $PLATFORM