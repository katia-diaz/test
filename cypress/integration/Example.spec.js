/// <reference types="Cypress" />
//import credentials from '../cypress.dev.json'

describe('Test', () => {

  before( () => {
    cy.viewport('macbook-15')
  })

  it('Should login', () => {
    cy.visit('http://testapp.galenframework.com/')
    cy.get('.button-login').click()
    //cy.log(credentials.env.userName)
    cy.get('input[name="login.username"]').type(Cypress.env('username_test'))
    //cy.log(credentials.env.password)
    cy.get('input[name="login.password"]').type(Cypress.env('password_test'))
    cy.get('.button-login').click()
    cy.get('#my-notes-page h2').should('be.visible')
    console.log("I'm logged !!")
  })


})