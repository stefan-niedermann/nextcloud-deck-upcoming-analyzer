describe('Analyzer main screen', () => {

  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains("Upcoming Analyzer")
  })
})