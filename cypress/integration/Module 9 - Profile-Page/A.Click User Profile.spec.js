before(() => {
    cy.login(Cypress.env('UserName'), Cypress.env('Password'), { timeout: 10000 });
});

describe("User Profile Page'", () => {

    it("Confirm UserProfile Redirect", () => {
        cy.clickUserProfile();
        cy.waitUntil(() => 
            cy.get('i[class="ion-heart"]').should('be.visible'),
        {
            timeout: 6000, // waits up to 2000 ms, default to 5000
            interval: 1000, // performs the check every 1000 ms, default to 200
            errorMsg: 'This is a custom error message' // overrides the default error message
        });

        cy.get('img[class="user-img"]').should('be.visible');
        cy.get('h4').should('contain', ' UdidactCamp2020 ');
        cy.get('a').contains(' Edit Profile Settings ');
    });
    
});

after(() => {
    cy.logout();
});