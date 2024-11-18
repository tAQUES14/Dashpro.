describe('User Deletion', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000');  // URL do formulário de login
    });

    it('should allow a user to delete a user', () => {
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/index-dashboard');  // Verifica se o dashboard é carregado

        cy.visit('http://127.0.0.1:8000/index-user');  // Acessa a lista de usuários
        cy.url().should('include', '/index-user');  // Verifica se estamos na lista de usuários

        // Localiza o usuário pelo ID e clica no botão "Apagar"
        const userId = 5;  // Exemplo de ID do usuário que você deseja excluir (substitua pelo ID real)
        cy.contains(userId)  // Encontra o ID do usuário na lista
            .parent()  // Acessa o contêiner do usuário
            .contains('Apagar')  // Encontra o botão "Apagar"
            .click();  // Clica no botão "Apagar"

        // Confirma a exclusão
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Tem certeza que deseja apagar este registro?');  // Texto correto da janela de confirmação
        });

        // Verifica se o usuário foi excluído com sucesso
        cy.get('.alert.alert-success').should('contain.text', 'Usuário excluído com sucesso!');  // Verifica a mensagem de sucesso

        // Verifica se o ID do usuário não está mais na lista
        cy.contains(userId).should('not.exist');  // Verifica se o ID do usuário foi removido da lista
    });
});
