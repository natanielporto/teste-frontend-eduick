describe('Nav Menus', () => {
  context('400 < resolution', () => {
    beforeEach(() => {
      cy.visit('localhost:3000').viewport(400, 800)
    })
    
    it('should display full navbar', () => {
      cy.get('.landingPage__navBar__mobile').should('be.visible')

      cy.get('.landingPage__navBar__mobile svg').should('be.visible')

      cy.get('.landingPage__navBar__mobile a h1 img').should('be.visible')
    })
  
    it('should be able to click on hamburguer', () => {
      cy.get('.landingPage__navBar__mobile svg').click()
    })
    
    it('should enable the get started modal', () => {
      cy.get('.landingPage__navBar__mobile svg').click()
      
      cy.get('.backgroundMobile__link').should('be.visible')
    })
    
    it('should be able to go to the dashboard when clicking the login modal', () => {
      cy.get('.landingPage__navBar__mobile svg').invoke('show').click()
      
      cy.get('.backgroundMobile__container__loginButton').click()

      cy.get('.background__container__loginButton').click()

      cy.url().should('eq', 'http://localhost:3000/dashboard')
    })

    it('should be able to click on the teacher button', () => {
      cy.get('button').contains("I'M A TEACHER").click().focused()
    })
  
    it('should be able to click on the student button', () => {
      cy.get('button').contains("I'M A STUDENT").click().focused()
    })
  
    it('should not be selected teacher when the student button is clicked', () => {
      cy.get('button').contains("I'M A STUDENT").click().get('button').contains("I'M A TEACHER").should('not.be.focused')
    })
  
    it('should not be selected student when the teacher button is clicked', () => {
      cy.get('button').contains("I'M A TEACHER").click().get('button').contains("I'M A STUDENT").should('not.be.focused')
    })
  })
})