/// <reference types="cypress" />

describe('4/19/2023',function(){

    before(function(){
        cy.viewport("macbook-16")
        //visit the application url
        cy.visit('http://only-testing-blog.blogspot.com/2013/11/new-test.html')

    })

it('Dropdown scenarios', () => {
 
    // //Using index
    // cy.get('[dir="ltr"] > :nth-child(5)').select(5);

    // //Using Value
    // cy.get('[dir="ltr"] > :nth-child(5)').select('UK');


    // //Using Text
    // cy.get('[dir="ltr"] > :nth-child(5)').select('Toyota');

    // //Multiple Select Value
    // cy.get('select[name="FromLB"]').select(['India','Italy']);

    // cy.get('[onclick="move(this.form.FromLB,this.form.ToLB)"]').click();




    
});

})