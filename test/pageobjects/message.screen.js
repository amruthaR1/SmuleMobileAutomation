class Message {
  get messageIcon() {
    return $("~Messages");
  }

  get chatLists() {
    return $('//*[@resource-id="com.smule.singandroid:id/chats_list"]');
  }

  get newChatIcon() {
    return $(
      '//*[@resource-id="com.smule.singandroid:id/start_new_chat_icon"]'
    );
  }

  get userToSendMessage() {
    return $('//*[@resource-id="com.smule.singandroid:id/chat_title"]');
  }

  get userCheckBox() {
    return $('//*[@resource-id="com.smule.singandroid:id/chat_selected"]');
  }

  get forwardToChat() {
    return $(
      '//*[@resource-id="com.smule.singandroid:id/new_chat_forward_chat"]'
    );
  }

  get messageTextBox() {
    return $('//*[@text="Type a message…"]');
  }

  get sendButton() {
    return $('//*[@resource-id="com.smule.singandroid:id/send_button"]');
  }

  get sentMessageBox() {
    return $('//*[@resource-id="com.smule.singandroid:id/chat_text_bubble"]');
  }

  async goToMessageScreen() {
    await this.messageIcon.waitForExist({
      timeout: 10000,
    });
    await this.messageIcon.click();
    await this.messageIcon.click();
  }

  async isChatListDisplayed() {
    await this.chatLists.waitForExist({ timeout: 5000 });
    return this.chatLists.isDisplayed();
  }

  async startNewChat() {
    await this.newChatIcon.click();
  }

  async selectUserToSendMessage() {
    await this.userToSendMessage.waitForExist({ timeout: 5000 });
    await this.userCheckBox.click();
  }

  async isUserSelected() {
    return this.userCheckBox.getAttribute("checked");
  }

  async moveForwardToSendMessage() {
    await this.forwardToChat.click();
  }

  async sendMessage(message) {
    await this.messageTextBox.setValue(message);
    await this.sendButton.click();
  }

  async sentMessageText() {
    return this.sentMessageBox.getText();
  }
}

module.exports = new Message();
