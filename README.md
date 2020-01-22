## Introduction
This repository demonstrates an issue that I have running an `Angular` application (with routing) in `Cordova`, on `IOS` platform using `WkWebView`.  
Migrating from `UIWebView` to `WkWebView` is required by `Apple` which will soon no longer accept apps using `UIWebView`.

## Reproduce the issue
 1. clone repository: `git clone https://github.com/sasensi/cordova-ios-angular.git`
 2. move to repository directory: `cd cordova-ios-angular`
 3. install dependencies: `npm i`
 4. create cordova project: `cordova create cordova com.demo.app DemoApp`
 5. build Angular app: `npm run build`
 6. move to cordova directory: `cd cordova`
 7. add WkWebView plugin: `cordova plugin add cordova-plugin-wkwebview-engine`
 8. add `<preference name="WKWebViewOnly" value="true"/>` in `./config.xml`
 9. add cordova IOS platform: `cordova platform add ios`
10. open `platforms/ios/DemoApp.xcodeproj` in XCode (10.1)
11. run with `IPhone X` simulator

## Test with UIWebView
Follow previous steps but skip `7.` and `8.`.
