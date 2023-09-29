const chai = require("chai");
const expect = chai.expect;
const logIn = require("../../utility/login");
const SONGBOOK = require("../pageobjects/songbook.screen");

describe("Songbook", () => {
  before(async () => {
    await logIn();
  });

  it("should sing a song", async () => {
    //action
    await SONGBOOK.goToSongBookScreen();
    await SONGBOOK.clickFree();
    await SONGBOOK.clickSing();
    await SONGBOOK.clickSolo();
    await SONGBOOK.clickAudio();
    await SONGBOOK.sing();
    await SONGBOOK.saveSong();

    //assert
    expect(await SONGBOOK.isSongSaved()).to.be.true;
  });
});
