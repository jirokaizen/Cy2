/// <reference types="cypress"/>


describe('dropdown example - autoguggestion', function(){


    it('verify dropdown', ()=>{

        cy.visit('https://www.wikipedia.org/')


        let searchItem = 'Delhi'

        cy.get('input#searchInput').clear().type(searchItem)



        //validation ----- autosuggestion count

        cy.get('h3.suggestion-title').should('have.length', 6)
        cy.get('h3.suggestion-title').should('have.length.greaterThan', 4)


        //cy.get('h3.suggestion-title').contains('Delhi University')


        cy.get('h3.suggestion-title').contains('Delhi University').click();



        //validation
        cy.title()
            .should('eq', 'Delhi University - Wikipedia')
            .should('contain', 'Delhi University')
            .should('not.eq', 'Wikipedia, the free encyclopedia')               //negative testing


        cy.url()
            .should('eq', 'https://en.wikipedia.org/wiki/Delhi_University')
            .should('contain', 'Delhi_University')
            .should('not.eq', 'https://en.wikipedia.org/wiki/Main_Page')               //negative testing


    })



})