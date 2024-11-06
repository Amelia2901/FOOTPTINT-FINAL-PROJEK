const homepage = require("../support/Pages/Home/homepage");
const loginPage = require("../support/Pages/login/loginPage");

describe("Login Tests", () => {
  // Case 1: Login with valid User 1 credentials
  it("Login with User 1 - valid credentials", () => {
    homepage.gotohomepage();
    loginPage.clickloginmenu();
    loginPage.inputUsername("123");
    loginPage.inputPassword("123");
    loginPage.clickLoginButton();
    loginPage.verifyLoginSuccess(""); // Custom message check
  });

  // Case 2: Login with valid User 2 credentials
  it("Login with User 2 - valid credentials", () => {
    homepage.gotohomepage();
    loginPage.clickloginmenu();
    loginPage.inputUsername("234");
    loginPage.inputPassword("234");
    loginPage.clickLoginButton();
    loginPage.verifyLoginSuccess("");
  });

  // Case 3: Login with invalid password
  it("Login with invalid password", () => {
    homepage.gotohomepage();
    loginPage.clickloginmenu();
    loginPage.inputUsername("123");
    loginPage.inputPassword("wrongpass");
    // Tangkap dan verifikasi teks dari alert yang muncul
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Wrong password.");
    });

    loginPage.clickLoginButton();
  });

  // Case 4: Login with invalid username
  it("Login with invalid username", () => {
    homepage.gotohomepage();
    loginPage.clickloginmenu();
    loginPage.inputUsername("halo");
    loginPage.inputPassword("123");
    // Tangkap dan verifikasi teks dari alert yang muncul
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Wrong password.");
    });

    loginPage.clickLoginButton();
  });

  // Case 5: Login with empty username
  it("Login with empty username", () => {
    homepage.gotohomepage();
    loginPage.clickloginmenu();
    loginPage.inputUsername("");
    loginPage.inputPassword("123");
    // Tangkap dan verifikasi teks dari alert yang muncul
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Please fill out Username and Password.");
    });

    loginPage.clickLoginButton();
  });

  // Case 6: Login with empty password
  it("Login with empty password", () => {
    homepage.gotohomepage();
    loginPage.clickloginmenu();
    loginPage.inputUsername("user1");
    loginPage.inputPassword("");
    // Tangkap dan verifikasi teks dari alert yang muncul
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Please fill out Username and Password.");
    });

    loginPage.clickLoginButton();
  });

  // Case 7: Login with empty username and password
  it("Login with empty username and password", () => {
    homepage.gotohomepage();
    loginPage.clickloginmenu();
    loginPage.inputUsername("");
    loginPage.inputPassword("");
    // Tangkap dan verifikasi teks dari alert yang muncul
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Please fill out Username and Password.");
    });

    loginPage.clickLoginButton();
  });

  // Case 8: Login with special characters in username
  it("Login with special characters in username", () => {
    homepage.gotohomepage();
    loginPage.clickloginmenu();
    loginPage.inputUsername("user!@#");
    loginPage.inputPassword("123");
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Wrong password.");
    });

    loginPage.clickLoginButton();
  });

  // Case 9: Login with SQL injection attempt
  it("Login with SQL injection attempt in username", () => {
    homepage.gotohomepage();
    loginPage.clickloginmenu();
    loginPage.inputUsername("' OR '1'='1");
    loginPage.inputPassword("user123");
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Wrong password.");
    });

    loginPage.clickLoginButton();
  });
});
