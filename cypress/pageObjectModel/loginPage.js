class LoginPage {
    visit() {
      cy.visit('/');
      cy.title().should('eq', "OrangeHRM");
    }
    
    
    
  
    fillForm(username, password) {
      cy.get('input[name="username"]').type(username);
      cy.get('input[name="password"]').type(password); 
    }
  
    
    submit() {
      cy.get('button[type="submit"]').click();  
    }
  
    login(username, password) {
      this.visit();         
      this.fillForm(username, password);
      this.submit(); 
    }
  }
  
  export default LoginPage;
  