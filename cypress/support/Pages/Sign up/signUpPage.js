const locators = require("./signUpLocators");

class SignUpPage {
  clicksignupmenu() {
    cy.xpath(locators.datasignup.clicksignupmenu).click();
  }
  inputUsername(username) {
    cy.wait(1000);
    if (username) {
      cy.xpath(locators.datasignup.inputUsername).type(username);
    } else {
      cy.xpath(locators.datasignup.inputUsername).clear();
    }
    cy.wait(1000);
  }

  inputPassword(password) {
    cy.wait(1000);
    if (password) {
      cy.xpath(locators.datasignup.inputPassword).type(password);
    } else {
      cy.xpath(locators.datasignup.inputPassword).clear(); // clear digunakan menghapus input dan mengirim string kosong
    }
    cy.wait(1000);
  }

  clickSignupButton() {
    cy.xpath(locators.datasignup.signupButton).click();
  }
}

module.exports = new SignUpPage();
