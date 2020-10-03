before('visit app', () => {
    cy.visit('');
});

describe('nav-bar', () => {
    it('nav bar should have 5 selections', () => {
        cy.get('div[id="navbarsExampleDefault"] > ul > li').eq(0).should('contain.text', 'home ');
        cy.get('div[id="navbarsExampleDefault"] > ul > li').eq(1).should('contain.text', 'About  ');
        cy.get('div[id="navbarsExampleDefault"] > ul > li').eq(2).should('contain.text', 'Contact ');
        cy.get('div[id="navbarsExampleDefault"] > ul > li').eq(3).should('contain.text', 'Sign in ');
        cy.get('div[id="navbarsExampleDefault"] > ul > li').eq(4).should('contain.text', 'Github ');
        
    });






// show this as the cleaned up more technical code after applying and testing the above code. 

    // it('nav bar should have 5 selections', () => {
    //     cy.get('div[id="navbarsExampleDefault"]').within(() => {
    //         cy.get('li:eq(0)').should('contain.text', 'home ');
    //         cy.get('li:eq(1)').should('contain.text', 'About ');
    //         cy.get('li:eq(2)').should('contain.text', 'Contact ');
    //         cy.get('li:eq(3)').should('contain.text', 'Sign in ');
    //         cy.get('li:eq(4)').should('contain.text', 'Github ');
    //     });
    // });
});