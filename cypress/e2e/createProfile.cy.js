describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/cadastro')
  })

  it('should steps 1 and 2 works', () => {
    cy.get('input[type="text"]').type('Tester cypress')
    cy.get('input[type="email"]').type('tester@test.cypress')
    cy.get('input[type="tel"]').type('123456789')
    cy.get('button[type="submit"]').click()

    cy.get('input[type="password"]').type('@Cypress#1234*')
    cy.get('button[type="submit"]').should('be.visible')
  })
})
