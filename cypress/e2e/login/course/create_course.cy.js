describe('Course Creation', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000');
    });

    it('should log in, navigate to the courses page, and create a new course', () => {
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/index-dashboard');

        cy.visit('http://127.0.0.1:8000/index-course');

        cy.url().should('include', '/index-course');

        cy.get('a.btn.btn-success.btn-sm').contains('Cadastrar').click();

        cy.url().should('include', '/create-course');

        cy.get('input#name').should('be.visible').type('Curso de Teste');

        cy.get('input#price').should('be.visible').type('99.99');

        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/show-course');

        cy.contains('Curso de Teste').should('be.visible');

        cy.visit('http://127.0.0.1:8000/index-course');

        cy.contains('Curso de Teste').should('be.visible');
    });
});
