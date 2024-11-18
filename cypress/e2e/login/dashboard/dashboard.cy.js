describe('Dashboard Page', () => {
  
    beforeEach(() => {
      
      cy.visit('http://127.0.0.1:8000');  
      cy.get('input[name="email"]').type('marcostaques13@gmail.com');  
      cy.get('input[name="password"]').type('1234567');  
      cy.get('button[type="submit"]').click();  
      cy.url().should('include', '/index-dashboard');  
    });
    
    it('should display the correct title on the dashboard', () => {

      cy.get('h2').should('be.visible').and('contain.text', 'Dashboard');
    });
  

  
  });
  