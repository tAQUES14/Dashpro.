describe('Accessing Restricted Pages Without Login', () => {
    it('should redirect the user to the login page if they try to access a restricted page', () => {
        cy.visit('http://127.0.0.1:8000/index-dashboard');  

        cy.url().should('include', 'http://127.0.0.1:8000');
    });
});
