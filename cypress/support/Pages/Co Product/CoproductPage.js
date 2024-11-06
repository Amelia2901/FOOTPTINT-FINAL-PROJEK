const locators = require("./CoproductLocators");

class Coproduct {
  constructor() {
    this.purchaseData = {}; // Objek untuk menyimpan data yang diinput
  }

  menucart() {
    cy.xpath(locators.dataco.clickmenucart).should("be.visible").click();
  }

  clickpoButton() {
    cy.xpath(locators.dataco.clickpoButton).should("be.visible").click();
  }

  selectProduct() {
    cy.xpath(locators.dataco.productLink).should("be.visible").click(); // Klik pada produk
  }

  clickAddToCart() {
    cy.xpath(locators.dataco.addToCartButton).should("be.visible").click(); // Klik tombol "Add to cart"
  }

  inputName(name) {
    cy.wait(1000);
    if (name) {
      cy.xpath(locators.dataco.inputName).type(name); // Ketikkan nama jika ada
    } else {
      cy.xpath(locators.dataco.inputName).clear(); // Hapus nama jika tidak ada
    }
    cy.wait(1000);
  }

  inputCountry(country) {
    this.purchaseData.country = country; // Menyimpan data country yang diinput
    cy.xpath(locators.dataco.inputCountry).should("be.visible").type(country);
  }

  inputCity(city) {
    this.purchaseData.city = city; // Menyimpan data city yang diinput
    cy.xpath(locators.dataco.inputCity).should("be.visible").type(city);
  }

  inputCard(cardNumber) {
    cy.wait(1000); // Tunggu 1 detik
    const cardInput = cy.xpath(locators.dataco.inputCard); // Lokasi input kartu

    if (cardNumber) {
      cardInput.type(cardNumber); // Ketikkan nomor kartu jika ada
    } else {
      cardInput.clear(); // Hapus input jika tidak ada nomor kartu
    }

    cy.wait(1000); // Tunggu lagi 1 detik setelah input
  }

  inputMonth(month) {
    this.purchaseData.month = month; // Menyimpan data month yang diinput
    cy.xpath(locators.dataco.inputMonth).should("be.visible").type(month);
  }

  inputYear(year) {
    this.purchaseData.year = year; // Menyimpan data year yang diinput
    cy.xpath(locators.dataco.inputYear).should("be.visible").type(year);
  }

  clickPurchaseButton() {
    cy.xpath(locators.dataco.purchasebotton).should("be.visible").click();
  }

  clickdelete() {
    cy.xpath(locators.dataco.clickdelete);
  }
}

module.exports = new Coproduct();
