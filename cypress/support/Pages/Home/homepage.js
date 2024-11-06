class homepage {
  gotohomepage() {
    cy.visit("https://www.demoblaze.com/index.html");
  }
}

module.exports = new homepage(); // ini harus ada setiap baru membuat js
