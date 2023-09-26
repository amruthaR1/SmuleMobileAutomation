const path = require("path");
const { config } = require("./wdio.shared.conf");



config.port = 4723;
config.runner = "local";
config.specs = ["../test/specs/**/*.js"];

config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    "appium:platformName": "Android",
    "appium:deviceName": "Pixel_3",
    "appium:platformVersion": "11.0",
    "appium:app": "/Users/testvagrant/Downloads/smule.apk",
    "appium:automationName": "UiAutomator2",
  },
];

exports.config = config;
