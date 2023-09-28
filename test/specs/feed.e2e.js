const chai = require("chai");
const expect = chai.expect;
const logIn = require("../../utility/login");
const FEED = require("../pageobjects/feed.screen");

describe("Feed", () => {
  before(async () => {
    await logIn();
  });

  it("should click on feed ", async () => {
    await FEED.clickFeedIcon();
    const isFeedIconSelected = await FEED.getValueOfAttribute("selected");
    expect(isFeedIconSelected).to.be.equal("true");
  });

  it("Should play the song in the feed", async () => {
    await FEED.playSong();
    const isSongPlaying = await FEED.isSongPlaying();
    expect(isSongPlaying).to.be.true;
    await FEED.exitPlaying();
  });

  it("Should follow a person and check if the count of followers incresed", async () => {
    await FEED.findFriends();
    await FEED.followFriend();

    await $('//*[@resource-id="com.smule.singandroid:id/left_button"]').click();

    const profileIcon = await $(
      '//*[@resource-id="com.smule.singandroid:id/menu_item_profile"]'
    );
    await profileIcon.waitForExist({ timeout: 15000 });

    await profileIcon.click();

    const text = await $('//*[@text="2"]').getText();

    expect(text).to.be.equal("2");
    const following = await $('//*[@text="following"]');
    await following.click();

    await $('//*[@text="Following"]').click();
  });
});
