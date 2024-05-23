describe('My First Test', () => {
  it('Verify the Title of the Website', () => {
    cy.visit('https://www.crownstack.com/')
    cy.title().should('eq','Crownstack Technologies')
  })
})