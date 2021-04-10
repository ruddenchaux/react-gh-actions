context('Home page', () => {
  before(() => {
    cy.visit('/');
  });

  describe('Layout', () => {
    it('renders Learn React! link', () => {
      cy.contains('Learn React!').should('exist');
    });
  });
});
