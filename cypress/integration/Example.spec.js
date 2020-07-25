/// <reference types="Cypress" />
import credentials from '../cypress.dev.json'

describe('Test', () => {

  before( () => {
    cy.viewport('macbook-15')
  })

  it('Should login', () => {
    cy.visit('http://testapp.galenframework.com/')
    cy.get('.button-login').click()
    cy.log(credentials.env.userName)
    cy.get('input[name="login.username"]').type(credentials.env.userName)
    cy.log(credentials.env.password)
    cy.get('input[name="login.password"]').type(credentials.env.password)
    cy.get('.button-login').click()
    cy.get('#my-notes-page h2').should('be.visible')
  })


})