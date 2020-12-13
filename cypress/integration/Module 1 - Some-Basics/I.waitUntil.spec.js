// explain before each for this test in order to visit the base url before each it block
beforeEach(() => {
    cy.visit('')
})

describe('Trying waitUntil', () => {

    it('without waitUntil', () => {
        cy.wait(7000)
        cy.get('div.article-preview').eq(0);
            cy.get('img').should('be.visible')
            cy.get('a.author').should('be.visible');
            cy.get('div.info').eq(0).should('have.descendants', 'span.date');
            cy.get('button').should('have.descendants', 'i.ion-heart');
        
    });

    // show the difference by running them separately using it.only

    it('With waitUntil', () => {
        cy.waitUntil(() =>
            cy.get('div.article-preview').eq(0),
            {
                timeout: 2000, // waits up to 2000 ms, default to 5000
                interval: 500, // performs the check every 500 ms, default to 200
                errorMsg: 'This is a custom error message' // overrides the default error message
            });
        cy.get('img').should('be.visible')
        cy.get('a.author').should('be.visible');
        cy.get('div.info').eq(0).should('have.descendants', 'span.date');
        cy.get('button').should('have.descendants', 'i.ion-heart');
    });

});