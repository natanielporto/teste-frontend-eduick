context('Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/dashboard')
  })

  it('should load the dashboard page', () => {
    cy.get('.dashboard__midSection__topContainer').should('be.visible').url().should('eq', 'http://localhost:3000/dashboard')    
  })

  it('should display the students avatar', () => {
    cy.get('.navBar__dashboard__avatar').should('be.visible')
  })

  it('should display the right student info', () => {
    cy.get('.dashboard__midSection__p').contains('Whether you are a student trying to find your ideal private language teachers/tutors')
  })

  it('should have the right amount of children cards', () => {
    cy.get('.dashboard__midSection__cardsSection').find('div.sc-dkPtyc.kzuXft').should('have.length', 6)
  })

  it('should display the right alt for the image', () => {
    cy.get('.dashboard__midSection__rightImage').should('have.attr', 'alt', 'A draw Three people sitting around a table exchanging student experiences.')
  })
})