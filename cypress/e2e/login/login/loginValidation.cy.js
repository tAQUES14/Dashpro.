describe('Login Form - Missing Email or Password', () => {
    it('should show an error when the email field is empty', () => {
        cy.visit('http://127.0.0.1:8000');
        cy.get('input[name="email"]').clear();
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click();
        cy.get('.alert.alert-danger').should('contain.text', 'Campo e-mail é obrigatório');
    });

    it('should show an error when the password field is empty', () => {
        cy.visit('http://127.0.0.1:8000');
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').clear();
        cy.get('button[type="submit"]').click();
        cy.get('.alert.alert-danger').should('contain.text', 'Campo senha é obrigatório');
    });
});
