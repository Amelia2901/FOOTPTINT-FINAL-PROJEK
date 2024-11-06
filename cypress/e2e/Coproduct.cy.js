const homepage = require("../support/Pages/Home/homepage");
const CoproductPage = require("../support/Pages/Co Product/CoproductPage");

//Case 1 Add product to cart and complete purchase with valid details
describe("Co Produk Tests", () => {
  beforeEach(() => {
    homepage.gotohomepage(); // Navigasi ke homepage sebelum setiap tes
  });

  it("1. Add product to cart and go to cart page", () => {
    CoproductPage.selectProduct();
    CoproductPage.clickAddToCart(); // Klik tombol "Add to Cart"
    CoproductPage.menucart(); // Klik tombol "Cart"
    cy.url().should("include", "/cart"); // Verifikasi URL cart
  });

  it("2. Add product to cart and complete purchase with valid details", () => {
    // Pilih produk dari list
    CoproductPage.selectProduct();
    CoproductPage.clickAddToCart(); // Klik tombol "Add to Cart"
    CoproductPage.menucart();

    // Lanjutkan ke checkout
    CoproductPage.clickpoButton(); // Klik tombol "Place Order"
    const purchaseDetails = {
      name: "John Doe",
      country: "USA",
      city: "New York",
      cardNumber: "1234567890123456",
      month: "06",
      year: "2024",
    };

    // Input data pembelian
    CoproductPage.inputName(purchaseDetails.name);
    CoproductPage.inputCountry(purchaseDetails.country);
    CoproductPage.inputCity(purchaseDetails.city);
    CoproductPage.inputCard(purchaseDetails.cardNumber);
    CoproductPage.inputMonth(purchaseDetails.month);
    CoproductPage.inputYear(purchaseDetails.year);

    // Klik tombol "Purchase"
    CoproductPage.clickPurchaseButton();
  });

  it("3. Fill in the form with empty name field", () => {
    CoproductPage.selectProduct(); // Pilih produk
    CoproductPage.clickAddToCart(); // Klik tombol "Add to Cart"
    CoproductPage.menucart(); // Klik tombol "Cart"
    CoproductPage.clickpoButton(); // Klik tombol "Place Order"

    const purchaseDetails = {
      name: "",
      country: "USA",
      city: "New York",
      cardNumber: "1234567890123456",
      month: "06",
      year: "2024",
    };

    // Isi form dengan data yang tidak lengkap (kosongkan nama)
    CoproductPage.inputName(purchaseDetails.name);
    CoproductPage.inputCountry(purchaseDetails.country);
    CoproductPage.inputCity(purchaseDetails.city);
    CoproductPage.inputCard(purchaseDetails.cardNumber);
    CoproductPage.inputMonth(purchaseDetails.month);
    CoproductPage.inputYear(purchaseDetails.year);

    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Please fill out Name and Creditcard.");
    });
    CoproductPage.clickPurchaseButton();
  });

  it("4. Delete Produk in the cart", () => {
    CoproductPage.selectProduct(); // Pilih produk
    CoproductPage.clickAddToCart(); // Klik tombol "Add to Cart"
    CoproductPage.menucart(); // Klik tombol "Cart"
    CoproductPage.clickdelete();
  });

  it("5. Fill in the form with empty Creditcard", () => {
    CoproductPage.selectProduct(); // Pilih produk
    CoproductPage.clickAddToCart(); // Klik tombol "Add to Cart"
    CoproductPage.menucart(); // Klik tombol "Cart"
    CoproductPage.clickpoButton(); // Klik tombol "Place Order"

    const purchaseDetails = {
      name: "John",
      country: "USA",
      city: "New York",
      cardNumber: "", // Kosongkan nomor kartu kredit
      month: "06",
      year: "2024",
    };

    // Isi form dengan data yang tidak lengkap
    CoproductPage.inputName(purchaseDetails.name);
    CoproductPage.inputCountry(purchaseDetails.country);
    CoproductPage.inputCity(purchaseDetails.city);
    CoproductPage.inputCard(purchaseDetails.cardNumber); // Kartu kosong
    CoproductPage.inputMonth(purchaseDetails.month);
    CoproductPage.inputYear(purchaseDetails.year);

    CoproductPage.clickPurchaseButton();
  });
});
