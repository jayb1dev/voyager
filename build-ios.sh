#!/bin/bash
#
# Build ios app
#

export BUILD_FOSS_ONLY=true

corepack enable
pnpm install

pushd ios/App
pod install
popd

pnpm exec ionic capacitor build ios


#
# See:
# https://github.com/aeharding/voyager/blob/main/CONTRIBUTING.md
#

echo
echo
echo Xcode should automatically open. You can then run the project with CMD+R.
echo
echo


