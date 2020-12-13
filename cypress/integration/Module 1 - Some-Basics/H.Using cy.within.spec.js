/// <reference types="Cypress" />




before('visit registration page', () => {

    cy.visit('');
    cy.viewport(1920, 1080);

})

// using cy.within to scope an element and it's decendants to be more accurate, less flakey, and more controlled.

describe('public landing page displays properly', () => {

    it('confirm conduit logo is visible and has correct sub headline', () => {
        cy.get('div.container').eq(1).within(() => {
            cy.get('h1').should('be.visible').and('have.text', 'conduit')
            cy.get('p').should('be.visible').and('have.text', 'A place to share your knowledge.')
        });
    });

    it('check the first post is visible and has a like button', () => {
        cy.get('div.article-preview').eq(0).children().eq(0).within(() => {
            cy.get('img').should('be.visible')
            cy.get('a.author').should('be.visible');
            cy.get('div.info').eq(0).should('have.descendants', 'span.date');
            cy.get('button').should('have.descendants', 'i.ion-heart');
        });
    });

});

/*
    TODO ---> introduce a cleaner concept, but do not go too much into it

            from this --> cy.get('div.article-preview').eq(0).children().eq(0).within(() => {

            to this   --> cy.get('div.article-preview:eq(0) > div.article-meta').within(() => {
*/

// it('check the first post is visible and has a like button', () => {
//     cy.get('div.article-preview:eq(0) > div.article-meta').within(() => {
//         cy.get('img').should('be.visible')
//         cy.get('a.author').should('be.visible');
//         cy.get('div.info').eq(0).should('have.descendants', 'span.date');
//         cy.get('button').should('have.descendants', 'i.ion-heart');
//     });
// });
