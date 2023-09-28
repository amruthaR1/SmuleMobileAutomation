const chai = require("chai");
const expect = chai.expect;
const logIn = require("../../utility/login");
const testData = require('../../data/testData.json')
const PROFILE = require("../pageobjects/profile.screen");

describe("Profile", () => {
  before(async () => {
    await logIn();
  });

  it("should go to profile screen", async () => {
    //action
    PROFILE.goToProfileScreen();

    //assert
    expect(await PROFILE.isUserNameDisplayed()).to.be.equal(true);
  });

  it("should open menu options", async () => {
    //action
    await PROFILE.goToMenu();

    //assert
    const isMenuOptionsDisplayed = await PROFILE.isMenuOptionDisplayed();
    expect(isMenuOptionsDisplayed).to.be.true;
  });

  it("Should edit Profile's bio", async () => {
    //action
    await PROFILE.clickOnEditProfile();
    await PROFILE.goToBio();

    await PROFILE.editBio(testData.newBio);
    await PROFILE.clickOnSave();

    //assert
    const newBioText = await PROFILE.getBiotext();
    expect(newBioText).to.be.equal(testData.newBio);
  });

  it("Should go to Invite", async () => {
    //action
    await PROFILE.goToInvites();

    //assert
    const isInvitesElmentSelected = await PROFILE.isInvitesElementSelected();
    expect(isInvitesElmentSelected).to.be.equal("true");
  });

  it("Should go to Playlists", async () => {
    //action
    await PROFILE.goToPlaylists()

    //assert
    const isPlaylistsElementSelected = await PROFILE.isPlaylistsElementSelected()
    expect(isPlaylistsElementSelected).to.be.equal("true");
  });

  it("Should go to About", async () => {
    //action
    await PROFILE.goToAbout();

    //assert
    const isAboutElementSelected = await PROFILE.isAboutElementSelected();
    expect(isAboutElementSelected).to.be.equal("true");
  });
});
