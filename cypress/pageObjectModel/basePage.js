class BasePage {
    visit() {
        cy.visit('https://demoqa.com/');
        cy.title().should('eq', "DEMOQA");
      }
  }
  
  export default BasePage;
  