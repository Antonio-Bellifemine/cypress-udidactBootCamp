describe('test conduit webapp', () => {

    it('display the log in page', () => {

        cy.viewport(1920, 1080);
        cy.visit('');

    });

    it('visit login', () => {

        cy.viewport(1920, 1080);
        cy.visit('login');

    });

    it('visit register', () => {

        cy.viewport(1920, 1080);
        cy.visit('register');

    });
    cy.trigger()
});