/// <reference types="cypress" />


describe('Exercise',function(){

    before(function(){

        //visit the application url
        cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')

    })

it('Evaluate the CSS elements',function(){


    //First Name text field
    cy.get('input[name=fname]')
    .should('not.have.value')
    .should('be.enabled')
    .type('Steven')
    .should('have.value','Steven');

    //Last Name text field
    cy.get('input[name=lname]')
    .should('not.have.value')
    .should('not.be.enabled')
    .should('not.have.value');

    //Bike checkbox
    cy.get('input[value=Bike]')
    .should('not.be.checked')
    .check()
    .should('be.checked')
    .uncheck()
    .should('not.be.checked');
    
    //Car checkbox
    cy.get('input[value=Car]')
    .should('not.be.checked')
    .check()
    .should('be.checked')
    .uncheck()
    .should('not.be.checked');

    //Boat checkbox
    cy.get('input[value=Boat]')
    .should('not.be.checked')
    .check()
    .should('be.checked')
    .uncheck()
    .should('not.be.checked');

    //Male radiobutton
    cy.get('input[value=male]')
    .should('not.be.checked')
    .click()
    .should('be.checked');
    
    //Female radiobutton
    cy.get('input[value=female]')
    .should('not.be.checked')
    .click()
    .should('be.checked');
    

})





})