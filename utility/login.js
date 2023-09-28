const LOGIN = require("../test/pageobjects/login.screen");
const credential = require("../data/credentials.json");

const logIn = async () => {
  await LOGIN.selectLanguage("English");
  await LOGIN.LoginUsingEmail.click();
  await LOGIN.Email.setValue(credential.validEmail);
  await LOGIN.NextButton.click();
  await LOGIN.Password.setValue(credential.validPassword);
  await LOGIN.NextButton.click();
};

module.exports = logIn;
