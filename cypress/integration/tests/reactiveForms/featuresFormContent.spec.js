describe('Angular reactive forms', () => {
    // consolidate all of the individual
    it('should open the "Features form" list', () => {
        cy.get('ul[id="Features-collapse"]').invoke('show')
    });
});