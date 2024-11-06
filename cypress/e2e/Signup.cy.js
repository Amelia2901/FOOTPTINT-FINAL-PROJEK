const homepage = require("../support/Pages/Home/homepage");
const signUpPage = require("../support/Pages/Sign up/signUpPage");
describe("SignUp Tests", () => {
  // Case 1: Sign Up with valid credentials
  it("Sign Up - valid credentials", () => {
    homepage.gotohomepage();
    signUpPage.clicksignupmenu();
    signUpPage.inputUsername("Footprint123");
    signUpPage.inputPassword("Footprint123");
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Sign up successful.");
    });
    signUpPage.clickSignupButton();
  });

  // Case 2: Sign Up with empty username
  it("Sign Up with empty username", () => {
    homepage.gotohomepage();
    signUpPage.clicksignupmenu();
    signUpPage.inputUsername("");
    signUpPage.inputPassword("Footprint123");
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Please fill out Username and Password.");
    });
    signUpPage.clickSignupButton();
  });

  // Case 3: Sign Up with empty password
  it("Sign Up with empty password", () => {
    homepage.gotohomepage();
    signUpPage.clicksignupmenu();
    signUpPage.inputUsername("Footprint123");
    signUpPage.inputPassword("");
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Please fill out Username and Password.");
    });
    signUpPage.clickSignupButton();
  });

  // Case 4: Sign Up with already username
  it("Sign Up with already username", () => {
    homepage.gotohomepage();
    signUpPage.clicksignupmenu();
    signUpPage.inputUsername("Footprint123");
    signUpPage.inputPassword("123");
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("This user already exist.");
    });
    signUpPage.clickSignupButton();
  });

  // Case 5: Sign Up with special characters in username
  it("Sign Up with special characters in username", () => {
    homepage.gotohomepage();
    signUpPage.clicksignupmenu();
    signUpPage.inputUsername("+@3$");
    signUpPage.inputPassword("123");
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Sign up successful.");
    });
    signUpPage.clickSignupButton();
  });

  // Case 6: Sign Up with password containing spaces
  it("Sign Up with password containing spaces", () => {
    homepage.gotohomepage();
    signUpPage.clicksignupmenu();
    signUpPage.inputUsername("cekajaa");
    signUpPage.inputPassword("new user 123");
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Sign up successful.");
    });
    signUpPage.clickSignupButton();
  });

  // Case 7: Sign Up with empty username and password
  it("Sign Up with empty username and password", () => {
    homepage.gotohomepage();
    signUpPage.clicksignupmenu();
    signUpPage.inputUsername("");
    signUpPage.inputPassword("");
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Please fill out Username and Password.");
    });
    signUpPage.clickSignupButton();
  });
});
