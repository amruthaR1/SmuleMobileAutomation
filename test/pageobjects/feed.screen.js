class Feed {
  get feedIcon() {
    return $('//*[@resource-id="com.smule.singandroid:id/menu_item_feed"]');
  }

  async clickFeedIcon() {
    await this.feedIcon.waitForExist({ timeout: 15000 });
    await this.feedIcon.click();
    await this.feedIcon.click();
  }

  async getValueOfAttribute(attribute) {
    return await this.feedIcon.getAttribute(attribute);
  }

  async playSong() {
    await $(
      '//*[@resource-id="com.smule.singandroid:id/album_art_play_button_overlay"]'
    ).click();
  }

  async isSongPlaying() {
    const nowPlaying = await $('//*[@text="Now Playing"]');
    await nowPlaying.waitForExist({ timeout: 5000 });
    return await nowPlaying.isDisplayed();
  }

  async exitPlaying() {
    await $('//*[@resource-id="com.smule.singandroid:id/btnBack"]').click();
  }

  async findFriends() {
    const getStarted = await $('//*[@text="Get Started"]');
    await getStarted.waitForExist({ timeout: 5000 });
    await getStarted.click();
  }

  async followFriend() {
    const followButton = await $('//*[@text="Follow"]');
    await followButton.waitForExist({ timeout: 5000 });
    await followButton.click();
  }
}

module.exports = new Feed();
