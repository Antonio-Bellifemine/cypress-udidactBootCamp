describe('test  web app', () => {
    it('should display the webapp home page', () => {
        cy.viewport(1920, 1080);
        cy.visit('https://angular.ganatan.com/');
        cy.get('span').contains('ganatan')
    });

});