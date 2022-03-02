/// <reference types="cypress" />


describe('header', () => {
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

describe('articles', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:3000/')
  })

  it('should display the article container', () => {
   
    cy.get('[data-cy=article-container]')
  })

  it('should show article cards in the container', () => {

    cy.get('[data-cy=article-container]')
      .children('[data-cy=article-card]')
  })

  it('should show the published date on an article card', () => {
    cy.get('[data-cy=article-card]')
      .children('[data-cy=article-date]')
  })

  it('should show the headline on an article card', () => {
    cy.get('[data-cy=article-card]')
      .children('[data-cy=article-content]')
      .children('[data-cy=article-headline]')
  })

  it('should show the abstract on an article card', () => {
    cy.get('[data-cy=article-card]')
      .children('[data-cy=article-content]')
      .children('[data-cy=article-abstract]')
  })

  it('should show the image on an article card', () => {
    cy.get('[data-cy=article-card]')
      .children('[data-cy=article-img-container]')
      .children('[data-cy=article-img]')
  })


})