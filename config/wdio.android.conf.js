const path = require("path");
const { config } = require("./wdio.shared.conf");



config.port = 4723;
config.runner = "local";
config.specs = ["../test/specs/**/*.e2e.js"];

config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    "appium:platformName": "Android",
    "appium:deviceName": "Pixel_3.0",
    "appium:platformVersion": "11.0",
    "appium:app": path.join(process.cwd(), "app/android/smule.apk"),
    "appium:automationName": "UiAutomator2",
    "appium:autoGrantPermissions": true,
  },
];

exports.config = config;
