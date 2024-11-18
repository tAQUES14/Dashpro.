describe('Login Page', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:8000');
  });

  it('should load the login page correctly', () => {
      cy.get('h3.text-center.font-weight-light.my-4').should('contain.text', 'Área Restrita');
  });
  
  it('should allow a user to log in successfully', () => {
    cy.get('input[name="email"]').type('marcostaques13@gmail.com');
    cy.get('input[name="password"]').type('1234567');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/index-dashboard');
  });

  it('should show an error for invalid credentials', () => {
    cy.get('input[name="email"]').type('invalid@example.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    cy.get('.alert.alert-danger').should('contain.text', 'E-mail ou senha inválido!');
  });
});
