/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:3000/')
  })

  it('displays the Header', () => {
   
    cy.get('[data-cy=header]')
  })

  it('displays the date in the Header', () => {
   
    cy.get('[data-cy=header-date]')
  })

  it('displays the title of the app in the Header', () => {
   
    cy.get('[data-cy=app-title]')
  })

  it('displays the useless buttons in the Header', () => {
   
    cy.get('[data-cy=header-button-section]')
      .get('[data-cy=log-in-button]')
      .get('[data-cy=subscribe-button]')
  })

})
