beforeEach(() => {
    cy.visit('')
})

describe('Trying waitUntil', () => {

    it('Using waitUntil successfully', () => {
        cy.waitUntil(() =>
            cy.get('div.article-preview').eq(0),
            {
                timeout: 2000, // waits up to 2000 ms, default to 5000
                interval: 500, // performs the check every 500 ms, default to 200
                errorMsg: 'This is a custom error message' // overrides the default error message
            });
    });

    it('without waitUntil', () => {
        cy.wait(5000)
        cy.get('div.article-preview').eq(0).children().eq(0).within(() => {
            cy.get('img').should('be.visible')
            cy.get('a.author').should('be.visible');
            cy.get('div.info').eq(0).should('have.descendants', 'span.date');
            cy.get('button').should('have.descendants', 'i.ion-heart');
        });
    });

});