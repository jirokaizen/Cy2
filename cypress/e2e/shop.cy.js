
/// <reference types="cypress" />


const login = require('../fixtures/login.json')
describe('Cypress Exercise', () => {
  
    it('User Story TT1', () => {
  

    //Validate login page

    //read JSON file
   // cy.fixture('login.json').then((login) => {
      
      //navigate to login page
      cy.visit(login.urllogin)
      cy.url().should('contains',login.urllogin)

      //check title
      cy.title().should('eq',login.logintitle)

      //check pre text of email text field
      cy.get('input[class^="email"]')
      .should('have.value', login.adminemail)
      .clear()
      .type(login.adminemail)
      .should('have.value', login.adminemail)

      //check pre text of password text field
      cy.get('input[type="password"]')
      .should('have.value', login.adminpassword)
      .clear()
      .type(login.adminpassword)
      .should('have.value', login.adminpassword)

      cy.get('input[id="RememberMe"]').click();

      //click login button
      cy.get('button[class*="login"]').click();
  
   // })



    //Validate dashboard page

    //read JSON file  
    cy.fixture('dashboard.json').then((dashboard) => {
      
      //Check if in dashboard page
      cy.url().should('eq',dashboard.urldashboard)

      //check title
      cy.title().should('eq',dashboard.dashboardtitle) 
      
      //logout
      cy.get('a[href*="logout"]').click();
  
    })


  })
})
  

  