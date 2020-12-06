let likeBtn = 'button';
let globalFeed = 'div.article-preview';

before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'));
});

describe("Clicking a like button while Logged in & on the Home Page", () => {
    it('confirm like button increases by 1', () => {
        let clickedLikeBtn = 'div.info'
        // wait for the last global feed article to populate until we move forward
        cy.waitUntil(() =>
            cy.get('a').contains('Global Feed'),
            {

                timeout: 5000, // waits up to 2000 ms, default to 5000
                interval: 500, // performs the check every 500 ms, default to 200
                errorMsg: 'This is a custom error message' // overrides the default error message

            }).click();

        /*    
            we can use cy.intercept() to manage the behavior of HTTP requests at the network layer, which 
            will allow us another way to wait for the expected behavior or results before moving on
        */
        cy.get(clickedLikeBtn).eq(1).should('have.text', "1");
        cy.intercept('DELETE', '/favorite').as('articleFavoritedBtnDeleted');
        cy.get(likeBtn).eq(0).click();
        cy.wait('@articleFavoritedBtnDeleted');

        cy.get('div.info').eq(1).should('have.text', "0");
    });
});

after(() => {
    cy.logout();
});