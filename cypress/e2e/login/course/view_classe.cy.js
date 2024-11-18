describe('Course Aulas View', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000');  // URL do formulário de login
    });

    it('should allow a user to view the lessons of a course', () => {
        cy.get('input[name="email"]').type('marcostaques13@gmail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/index-dashboard');  // Verifica se o dashboard foi carregado

        cy.visit('http://127.0.0.1:8000/index-course');
        cy.url().should('include', '/index-course');  // Verifica se estamos na lista de cursos

        const courseName = 'Curso de Laravel - T2';  // Nome do curso
        cy.contains(courseName)  // Encontra o curso pelo nome
            .parent()  // Acessa o contêiner do curso
            .contains('Aulas')  // Verifica se há o link ou botão "Aulas"
            .click();  // Clica no link ou botão para ver as aulas

        cy.url().should('include', '/index-classe');  // Verifica se a URL está correta

        // Espera um tempo para garantir que a página de aulas esteja carregada
        cy.wait(3000);  // Aumente o tempo se necessário

        // Verifica se as aulas do curso estão visíveis
        cy.get('table')  // Localiza a tabela que contém as aulas
            .should('be.visible')  // Verifica se a tabela está visível
            .within(() => {
                cy.contains('Aula 1').should('be.visible');  // Verifica se "Aula 1" está visível na tabela
                cy.contains('Aula 2').should('be.visible');  // Verifica se "Aula 2" está visível na tabela
            });
    });
});
