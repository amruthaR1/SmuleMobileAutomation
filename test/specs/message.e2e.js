const chai = require("chai");
const expect = chai.expect;
const logIn = require("../../utility/login");
const testData = require("../../data/testData.json");
const MESSAGE = require("../pageobjects/message.screen");

describe("Message", () => {
  before(async () => {
    await logIn();
  });

  it("1. should go to message screen", async () => {
    //action
    await MESSAGE.goToMessageScreen();

    //assert
    expect(await MESSAGE.isChatListDisplayed()).to.be.true;
    await driver.pause(10000);
  });

  it("2. should select the user to send message", async () => {
    //action
    await MESSAGE.startNewChat();
    await MESSAGE.selectUserToSendMessage();

    //assert
    const isUserSelected = await MESSAGE.isUserSelected();
    expect(isUserSelected).to.be.equal("true");
  });

  it("3. should message the selected user", async () => {
    //action
    await MESSAGE.moveForwardToSendMessage();
    await MESSAGE.sendMessage(testData.messageToSend);

    //assert
    const textBubbleText = await MESSAGE.sentMessageText();
    expect(textBubbleText).to.be.equal(testData.messageToSend);
  });
});
