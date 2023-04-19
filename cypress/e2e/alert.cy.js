/// <reference types="cypress" />


describe('Exercise',function(){

    before(function(){
        cy.viewport("macbook-16")
        //visit the application url
        cy.visit('http://www.uitestpractice.com/Students/Switchto')

    })

it('should trigger a confirmation with a message', () => {
 
 //press ok on alert
 cy.get('button[id=alert]').click();
 cy.get('div[id=demo]').should('have.text','You have clicked on ok button in alert window');


  //press cancel on prompt
  cy.get('button[id=confirm]').click()
  cy.on('window:confirm', () => false);
  cy.get('div[id=demo]').should('have.text','You pressed Cancel in confirm window');


  //enter name in prompt
  cy.window().then(function(p){
    cy.stub(p, "prompt").returns("Steve");
    cy.get('button[id=prompt]').click()
    cy.get('div[id=demo]').should('have.text','Hello Steve! How are you today?');
 });
});





})