const locators = require("./loginLocators");

class LoginPage {
  clickloginmenu() {
    cy.xpath(locators.datatesid.clickloginmenu).click();
  }
  inputUsername(username) {
    cy.wait(1000);
    if (username) {
      cy.xpath(locators.datatesid.inputUsername).type(username);
    } else {
      cy.xpath(locators.datatesid.inputUsername).clear();
    }
    cy.wait(1000);
  }

  inputPassword(password) {
    cy.wait(1000);
    if (password) {
      cy.xpath(locators.datatesid.inputPassword).type(password);
    } else {
      cy.xpath(locators.datatesid.inputPassword).clear(); // clear digunakan menghapus input dan mengirim string kosong
    }
    cy.wait(1000);
  }

  clickLoginButton() {
    cy.xpath(locators.datatesid.loginButton).click(); // Tambahkan tanda kurung untuk memastikan klik berjalan
  }

  // Fungsi untuk verifikasi login sukses
  verifyLoginSuccess(expectedText) {
    cy.xpath(locators.datatesid.welcomeText).should(
      "contain.text",
      expectedText
    );
  }
}

module.exports = new LoginPage();
