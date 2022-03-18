describe('dashboard', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.contains('Welcome to dashboard!').should('exist');
    cy.contains('Welcome to api!').should('exist');
    cy.contains('sample-page works!').should('exist');
  });
});
