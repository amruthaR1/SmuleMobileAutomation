const credential = require("../../data/credentials.json");
const LOGIN = require("../pageobjects/login.screen");
const chai = require("chai");
const expect = chai.expect;

describe("Log In", () => {
  const restartApp = async () => {
    await driver.closeApp();
    await driver.launchApp();
  };

  beforeEach(async () => {
    await LOGIN.selectLanguage("English");
    await LOGIN.LoginUsingEmail.click();
  });

  afterEach(async () => {
    await restartApp();
  });

  it("1. Should enter invalid email and check if the next button is enabled", async () => {
    //action
    await LOGIN.Email.setValue(credential.invalidEmail);

    //assert
    expect(await LOGIN.NextButton.isEnabled()).to.be.false;
  });

  it("2. should enter invalid password and check for error message", async () => {
    //action
    await LOGIN.Email.setValue(credential.validEmail);
    await LOGIN.NextButton.click();
    await LOGIN.Password.setValue(credential.invalidPassword);
    await LOGIN.NextButton.click();

    //assert
    expect(await LOGIN.doesErrorMessageExist()).to.be.true;
  });

  it("3. Should log in when valid credentials are entered", async () => {
    //action
    await LOGIN.Email.setValue(credential.validEmail);
    await LOGIN.NextButton.click();
    await LOGIN.Password.setValue(credential.validPassword);
    await LOGIN.NextButton.click();

    //assert
    expect(await LOGIN.isProfileIconExists()).to.be.true;
  });
});
