const chai = require("chai");
const expect = chai.expect;
const logIn = require("../../utility/login");
const FEED = require("../pageobjects/feed.screen");

describe("Feed", () => {
  before(async () => {
    await logIn();
  });

  it("1. should click on feed ", async () => {
    //action
    await FEED.clickFeedIcon();

    //assert
    const isFeedIconSelected = await FEED.getValueOfAttribute("selected");
    expect(isFeedIconSelected).to.be.equal("true");
  });

  it("2. Should play the song in the feed", async () => {
    //action
    await FEED.playSong();

    //assert
    const isSongPlaying = await FEED.isSongPlaying();
    expect(isSongPlaying).to.be.true;

    //going back to feed screen
    await FEED.exitPlaying();
  });

  it("3. Should follow a person and check if the count of followers incresed", async () => {
    //action
    await FEED.findFriends();
    await FEED.followFriend();

    //assert
    const followingCount = await FEED.getFollowingCount();
    expect(followingCount).to.be.equal("2");

    //clean up(unfollowing)
    const following = await $('//*[@text="following"]');
    await following.click();
    await $('//*[@text="Following"]').click();
  });
});
