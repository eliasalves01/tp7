describe('Books List Page', () => {
    beforeEach(() => {
      cy.visit('/books-list'); // Substitua pela rota real da sua aplicação
    });
  
    it('deve exibir a lista de livros', () => {
      cy.get('h1').should('have.text', 'Lista de Livros Cadastrados');
      cy.get('.card-book').should('have.length.greaterThan', 0);
    });
  
    it('deve navegar para a página de detalhes ao clicar em um livro', () => {
      cy.get('.card-book').first().click();
      cy.url().should('include', '/book-details');
      // Adicione mais verificações conforme necessário para a página de detalhes
    });
  
    it('deve mostrar um feedback adequado durante o carregamento dos dados', () => {
      cy.intercept('https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json', {}).as('getBooks');
      cy.wait('@getBooks');
      cy.contains('Carregando...').should('exist');
    });
  });