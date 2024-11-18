describe('Cadastro de Novo Usuário', () => {
    it('Deve permitir o cadastro de um novo usuário', () => {
      // Acesse a página de cadastro de novo usuário
      cy.visit('http://127.0.0.1:8000/create-user-login')  // Acesse a página de cadastro de usuário
  
      // Verifique se os campos do formulário estão presentes
      cy.get('input[name="name"]').should('be.visible')  // Campo de nome
      cy.get('input[name="email"]').should('be.visible') // Campo de email
      cy.get('input[name="password"]').should('be.visible')  // Campo de senha
  
      // Preencher o formulário de cadastro
      cy.get('input[name="name"]').type('Marcos Taques')  // Nome
      cy.get('input[name="email"]').type('marcostaques11@gmail.com')  // Email
      cy.get('input[name="password"]').type('1234567')  // Senha
  
      // Submeter o formulário
      cy.get('form').submit()  // Enviar o formulário de cadastro
  
      // Verifique se o usuário foi redirecionado para a página de sucesso ou listagem
      cy.url().should('include', 'http://127.0.0.1:8000')  // URL deve incluir o caminho de exibição do usuário
      cy.contains('Usuário cadastrado com sucesso!')  // Verificar se há uma mensagem de sucesso
    })
  })
  