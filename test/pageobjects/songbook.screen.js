class SongBook {
  get songBookIcon() {
    return $('//*[@resource-id="com.smule.singandroid:id/menu_item_songbook"]');
  }

  get freeElement() {
    return $('//*[@text="Free"]');
  }

  get singELement() {
    return $('//*[@text="Sing"]');
  }

  get soloElement() {
    return $('//*[@text="Solo"]');
  }

  get audioElement() {
    return $('//*[@text="Audio"]');
  }

  get singFullSongButton() {
    return $('//*[@text="Sing Full Song"]');
  }

  get gotItButton() {
    return $('//*[@text="Got It"]');
  }

  get okButton() {
    return $('//*[@text="OK"]');
  }

  get saveEarlyButton() {
    return $('//*[@text="Save early"]');
  }

  get continueButton() {
    return $('//*[@text="Continue"]');
  }

  get saveButton() {
    return $('//*[@text="Save"]');
  }

  get assertionMessage(){
    return $('//*[@text="Excellent Solo"]')
  }
  async goToSongBookScreen() {
    await this.songBookIcon.click();
  }

  async clickFree() {
    await this.freeElement.waitForExist({ timeout: 10000 });
    await this.freeElement.click();
  }

  async clickSing() {
    await this.singELement.waitForExist({ timeout: 10000 });
    await this.singELement.click();
  }

  async clickSolo() {
    await this.soloElement.waitForExist({ timeout: 10000 });
    await this.soloElement.click();
  }

  async clickAudio() {
    await this.audioElement.waitForExist({ timeout: 10000 });
    await this.audioElement.click();
  }

  async clickSingFullSongButton() {
    await this.singFullSongButton.click();
  }

  async clickGotItButton() {
    await this.gotItButton.click();
  }

  async clickOk() {
    await this.okButton.waitForExist({ timeout: 10000 });
    await this.okButton.click();
  }

  async sing() {
    await this.clickSingFullSongButton();
    await this.clickGotItButton();
    await this.clickOk();
    await driver.pause(30000);
  }

  async clickSaveEarly() {
    await this.saveEarlyButton.click();
  }

  async clickContinue() {
    await this.continueButton.click();
  }
  async clickSaveButton() {
    await this.saveButton.click();
  }

  async saveSong() {
    await driver.back();
    await this.clickSaveEarly();
    await this.clickGotItButton();
    await this.clickContinue();
    await this.clickSaveButton();
  }

  async isSongSaved(){
    await this.assertionMessage.waitForExist({ timeout: 7000 });
    return this.assertionMessage.isDisplayed();
  }
}

module.exports = new SongBook();
