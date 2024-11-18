describe('User Edit Form', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000');
    });

    it('should allow a user to edit their information', () => {
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/index-dashboard');

        cy.visit('http://127.0.0.1:8000/index-user');
        cy.url().should('include', '/index-user');

        cy.contains('Editar')
            .should('be.visible')
            .click();

        cy.url().should('include', '/edit-user');

        cy.get('input[name="name"]').clear().type('Marcos Silva');
        cy.get('input[name="email"]').clear().type('marcos.silva@example.com');
        cy.get('select#roles').select('Admin');

        cy.contains('Salvar')
            .should('be.visible')
            .click();

        cy.url().should('include', '/show-user');
        cy.contains('Marcos Silva').should('be.visible');
        cy.contains('marcos.silva@example.com').should('be.visible');
    });

    it('should show an error if the email is already taken', () => {
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/index-dashboard');

        cy.visit('http://127.0.0.1:8000/index-user');
        cy.contains('Marcos')
            .parent();
        cy.contains('Editar')
            .click();

        cy.url().should('include', '/edit-user');
        cy.get('input[name="email"]').clear().type('marcostaques13@gmail.com');
        cy.contains('Salvar')
            .should('be.visible')
            .click();

        cy.get('.alert.alert-danger').should('contain.text', 'O e-mail já está cadastrado!');
    });
});
