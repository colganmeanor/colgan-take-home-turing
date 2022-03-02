/// <reference types="cypress" />


describe('header', () => {
  beforeEach(() => {
    
    cy.intercept('GET', '/home', {
      fixture: 'articles.json'
    })

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

  it('displays the category selection options in the header nav bar', () => {
   
    cy.get('[data-cy=header-category-link-section]')
      .children('[data-cy=article-category-link]')
      .should('have.length', 16)
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

describe('article detail view', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:3000/')
  })

  it('should display the article container', () => {
   
    cy.get('[data-cy=article-container]')
  })

  it('should be able to click an article and be taken to the detail view/route for this article', () => {

    cy.get('[data-cy=article-container]')
      .children('[data-cy=article-card]').eq(1)
      .click()

      .get('[data-cy=article-detail]')
      .children('[data-cy=article-detail-text]')
      .children('[data-cy=article-detail-headline]')
      .siblings('[data-cy=article-detail-abstract]')

      .get('[data-cy=article-detail-byline]')
      .get('[data-cy=article-detail-published-date]')
  })


})

