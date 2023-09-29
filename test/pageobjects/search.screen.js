class Search {
  get searchBar() {
    return $('//*[@text="Search for songs, singers, invites…"]');
  }

  get searchEditBar() {
    return $('//*[@resource-id="com.smule.singandroid:id/search_edit_text"]');
  }

  get suggestedSongElement() {
    return $('//*[@resource-id="com.smule.singandroid:id/suggestion"]');
  }

  async goToSearch() {
    await $(
      '//*[@resource-id="com.smule.singandroid:id/menu_item_songbook"]'
    ).click();
    await this.searchBar.click();
  }

  async search(songName) {
    await this.searchEditBar.setValue(songName);
  }

  async getSuggestedSongName() {
    return await this.suggestedSongElement.getText();
  }
}

module.exports = new Search();
