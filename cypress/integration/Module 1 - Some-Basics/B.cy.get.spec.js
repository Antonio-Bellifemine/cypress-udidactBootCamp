
describe('using cy.get',() => {

    it('check for conduit logo', () => {

        cy.viewport(1920, 1080);
        cy.visit('');
        cy.get('a[class="navbar-brand"]');

    });

    it('get a nav-link', () => {
        cy.get('[class="nav-link"]');
    });


    it('get a button', () => {
        cy.get('button');
    });


    it('get a list item', () => {
        cy.get('app-article-list-item')
    });

    it('get a div.sidebar', () => {
        cy.get('div.sidebar')
    });
});
