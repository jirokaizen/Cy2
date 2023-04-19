
/// <reference types="cypress" />

  describe('OrangeHRM Exercise', () => {
  
    it('User Story TT1', () => {
  

    //Validate login page

    //read JSON file
    cy.fixture('orange.json').then((login) => {
      
      //navigate to login page
      cy.visit(login.urllogin)
      cy.url().should('contains',login.urllogin)

      //check title
      cy.title().should('eq',login.logintitle)

      //type in username text field
      cy.get('input[name="username"]')
      .should('not.have.value')
      .type(login.adminusername)
      .should('have.value', login.adminusername)

      //check pre text of password text field
      cy.get('input[name="password"]')
      .should('not.have.value')
      .type(login.adminpassword)
      .should('have.value', login.adminpassword)

      //click login button
      cy.get('[type="submit"]')
      .click();
  
    })

  })
 

  })
  