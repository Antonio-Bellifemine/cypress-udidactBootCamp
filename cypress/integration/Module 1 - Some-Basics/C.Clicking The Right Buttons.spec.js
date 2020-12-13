
describe('How to click the right button when there is more than one', () => {

    it('click a link', () => {
        cy.viewport(1920, 1080);
        cy.visit('');
        cy.get('button').click()
    });

});