describe('User Creation Form - Missing Fields', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000');
    });

    it('should show an error when the name field is empty', () => {
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/index-dashboard');
        cy.visit('http://127.0.0.1:8000/create-user');
        cy.get('input[name="name"]').clear();
        cy.get('input[name="email"]').type('newuser@example.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('select#roles').select('Admin');
        cy.get('button[type="submit"]').click();
        cy.get('.alert.alert-danger').should('contain.text', 'Campo nome é obrigatório');
    });

    it('should show an error when the email field is empty', () => {
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/index-dashboard');
        cy.visit('http://127.0.0.1:8000/create-user');
        cy.get('input[name="name"]').type('Marcos');
        cy.get('input[name="email"]').clear();
        cy.get('input[name="password"]').type('password123');
        cy.get('select#roles').select('Admin');
        cy.get('button[type="submit"]').click();
        cy.get('.alert.alert-danger').should('contain.text', 'Campo e-mail é obrigatório');
    });

    it('should show an error when the password field is empty', () => {
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/index-dashboard');
        cy.visit('http://127.0.0.1:8000/create-user');
        cy.get('input[name="name"]').type('Marcos');
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').clear();
        cy.get('select#roles').select('Admin');
        cy.get('button[type="submit"]').click();
        cy.get('.alert.alert-danger').should('contain.text', 'Campo senha é obrigatório');
    });

    it('should show an error when the role field is empty', () => {
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/index-dashboard');
        cy.visit('http://127.0.0.1:8000/create-user');
        cy.get('input[name="name"]').type('Marcos');
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').type('password123');
        cy.get('select#roles').select('');
        cy.get('button[type="submit"]').click();
        cy.get('.alert.alert-danger').should('contain.text', 'O e-mail já está cadastrado!');
    });
});
