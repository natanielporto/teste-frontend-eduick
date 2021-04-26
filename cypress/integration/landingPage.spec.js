context('Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('should load the landing page', () => {
    cy.get('.landingPage__midSectionLeft__image').should('be.visible').url().should('eq', 'http://localhost:3000/')    
  })

  it('should be able to type in the search box', () => {
    cy.get('input').type('This is a test.').should('have.value', 'This is a test.')
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

  it('should render the landing page modal when the get started button is clicked', () => {
    cy.get('button').contains('Get Started').click().get('.landingPageModal__container__regularTitle').should('be.visible')
  })

  it('should be able to type in both inputs of the landing page modal', () => {
    cy.get('button').contains('Get Started').click().get('.landingPageModal__container__regularTitle').get('.landingPageModal__container__inputName').contains('Username:').type('test@test.com')

    cy.get('.landingPageModal__container__inputName').contains('Password:').type('12345678')
  })

  it('should be able to see the password when clicking the eye in the input', () => {
    cy.get('button').contains('Get Started').click().get('.landingPageModal__container__inputName').find('[type=password]').type('12345678').get('.landingPageModal__container__eyeIcon').click().get('[type=text]').should('be.visible', '12345678')
  })
})