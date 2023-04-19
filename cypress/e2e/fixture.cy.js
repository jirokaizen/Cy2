
/// <reference types="cypress" />


//const login = require('../fixtures/login.json')
describe('Cypress Exercise', () => {
  
    before(function(){

        cy.fixture('login.json').as('login')

    })


    it('User Story TT1', function()  {
  

    //Validate login page

 
      
      //navigate to login page
      cy.visit(this.login.urllogin)
      cy.url().should('contains',this.login.urllogin)

      //check title
      cy.title().should('eq',this.login.logintitle)

      //check pre text of email text field
      cy.get('input[class^="email"]')
      .should('have.value', this.login.adminemail)
      .clear()
      .type(this.login.adminemail)
      .should('have.value', this.login.adminemail)

      //check pre text of password text field
      cy.get('input[type="password"]')
      .should('have.value', this.login.adminpassword)
      .clear()
      .type(this.login.adminpassword)
      .should('have.value', this.login.adminpassword)

      cy.get('input[id="RememberMe"]').click();

      //click login button
      cy.get('button[class*="login"]').click();
  


  })
})
  

  