// Comando customizado para login
Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://127.0.0.1:8000'); // Acesse a página de login
    cy.get('input[name="marcostaques13@gmail.com"]').type(email); // Preenche o campo de e-mail
    cy.get('input[name="1234567"]').type(password); // Preenche o campo de senha
    cy.get('button[type="submit"]').click(); // Submete o formulário de login
});
