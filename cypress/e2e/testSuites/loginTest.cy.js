import LoginPage from '../../pageObjectModel/loginPage';

describe('Login Testi', () => {
  const loginPage = new LoginPage();

  it('Başarılı bir şekilde giriş yapmalıdır', () => {
    cy.loginWithFixture(); 
    cy.title().should('eq', 'OrangeHRM'); 
  });
});
