class Profile {
  get profileIcon() {
    return $('//*[@resource-id="com.smule.singandroid:id/menu_item_profile"]');
  }

  get menuIcon() {
    return $('//*[@resource-id="com.smule.singandroid:id/btn_menu"]');
  }

  get menuOptions() {
    return $('//*[@resource-id="com.smule.singandroid:id/grp_action_sheet"]');
  }

  get editProfileButton() {
    return $('//*[@text="Edit Profile"]');
  }

  get bioElement() {
    return $('//*[@resource-id="com.smule.singandroid:id/edit_bio"]');
  }

  get saveButton() {
    return $('//*[@text="Save"]');
  }

  get newBioElement(){
    return $(
      '//*[@resource-id="com.smule.singandroid:id/txt_profile_blurb"]'
    );
  }

  get invitesElement(){
    return $('//*[@text="Invites"]');
  }

  get playlistsElement(){
    return $('//*[@text="Playlists"]');
  }

  get aboutElement(){
    return $('//*[@text="About"]');
  }

  get usernameElement(){
    return $('//*[@resource-id="com.smule.singandroid:id/txt_username"]');
  }
  async goToProfileScreen() {
    await this.profileIcon.waitForExist({ timeout: 15000 });
    await this.profileIcon.click();
    await this.profileIcon.click();
  }

  async isUserNameDisplayed(){
    const username = this.usernameElement; 
    await username.waitForExist({ timeout: 15000 });
    return username.isDisplayed();
  }

  async goToMenu() {
    await this.menuIcon.click();
  }

  async isMenuOptionDisplayed() {
    return this.menuOptions.isDisplayed();
  }

  async clickOnEditProfile() {
    await this.editProfileButton.click();
  }

  async goToBio() {
    const scrollElement = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Bio")`;
    await $(scrollElement).click();
  }

  async editBio(newBio) {
    await this.bioElement.click();
    await this.bioElement.setValue(newBio);
  }

  async clickOnSave() {
    await this.saveButton.click();
  }

  async getBiotext(){
    return this.newBioElement.getText();
  };

  async goToInvites(){
    await this.invitesElement.click();
  }

  async isInvitesElementSelected(){
    return this.invitesElement.getAttribute("selected");
  }

  async goToPlaylists(){
    await this.playlistsElement.click();
  }

  async isPlaylistsElementSelected(){
    return this.playlistsElement.getAttribute("selected");
  }

  async goToAbout(){
    await this.aboutElement.click();
  }

  async isAboutElementSelected(){
    return this.aboutElement.getAttribute("selected");
  }

}

module.exports = new Profile();
