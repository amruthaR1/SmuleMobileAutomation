class LogIn {
    
  async selectLanguage(language) {
    const scrollElement = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${language}")`;
    await $(scrollElement).click();

    await $("//*[@resource-id='com.smule.singandroid:id/yesButton']").click();
  }

  get LoginUsingEmail() {
    return $("//*[@text='Sign in with Email']");
  }

  get Email() {
    return $('//*[@resource-id="com.smule.singandroid:id/editField"]');
  }

  get Password() {
    return $('//*[@text="your password"]');
  }
  get NextButton() {
    return $('//*[@text="Next"]');
  }

  async doesErrorMessageExist(){
    const errorMessage = await $(
      '//*[@resource-id="com.smule.singandroid:id/error_with_title_container"]'
    );
    await errorMessage.waitForExist({ timeout: 10000 });

    return await errorMessage.isDisplayed();
  }
  async isProfileIconExists() {
    const profileIcon = await $(
      '//*[@resource-id="com.smule.singandroid:id/menu_item_profile"]'
    );
    await profileIcon.waitForExist({ timeout: 15000 });
    return profileIcon.isDisplayed();
  }
}

module.exports = new LogIn();
