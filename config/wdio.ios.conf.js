const path = require("path");
const { config } = require("./wdio.shared.conf");

config.port = 4723;
config.runner = "local";
// test/specs/ios/exercie1.e2e.js

config.specs = ["../test/specs/**/*.js"];

config.capabilities = [
  {
    // capabilities for local Appium web tests on iOS
    platformName: "iOS",
    "appium:deviceName": "iphonetest",
    "appium:platformVersion": "16.4",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/smule.ipa"),
  },
];

exports.config = config;
