const chai = require("chai");
const expect = chai.expect;
const logIn = require("../../utility/login");
const testData = require("../../data/testData.json");
const SEARCH = require("../pageobjects/search.screen");
const { connect } = require("mongoose");

describe("Search Feature", () => {
  before(async () => {
    await logIn();
  });
  it("1. should search a song", async () => {
    //action
    await SEARCH.goToSearch();
    await SEARCH.search(testData.songNameToSearch);

    //assert
    const suggestedSongName = await SEARCH.getSuggestedSongName();
    expect(suggestedSongName).to.include(testData.songNameToSearch);
  });
});
