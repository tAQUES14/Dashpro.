describe('User Edit Password', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000');  // URL do formulário de login
    });

    it('should allow a user to edit their password', () => {
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/index-dashboard');

        cy.visit('http://127.0.0.1:8000/index-user');  // Acessa a lista de usuários
        cy.url().should('include', '/index-user');  // Verifica se estamos na lista de usuários

        cy.contains('Marcos Silva')  // Encontra o usuário pelo nome
            .parent()  // Acessa o contêiner do usuário
            .contains('Visualizar')  // Encontra o link de visualização
            .click();  // Clica no link "Visualizar"

        cy.url().should('include', '/show-user');  // Verifica se estamos na página do usuário

        // Clica no botão "Editar Senha"
        cy.contains('Editar Senha')
            .should('be.visible')
            .click();

        cy.url().should('include', '/edit-user-password/8');  // Verifica se estamos na página de edição de senha

        cy.get('input[name="password"]').clear().type('newpassword123');  // Nova senha

        cy.contains('Salvar')
            .should('be.visible')
            .click();

        cy.url().should('include', '/show-user');  // Verifica se redireciona para a página do usuário
        cy.contains('Senha do usuário editada com sucesso!').should('be.visible');  // Verifica a mensagem de sucesso
    });


    
});
