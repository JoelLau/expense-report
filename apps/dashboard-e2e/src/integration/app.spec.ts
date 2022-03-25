describe('dashboard', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.contains('Dashboard').should('exist');
  });
});
