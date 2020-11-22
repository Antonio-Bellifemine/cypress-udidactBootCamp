
describe('using cy.get',() => {

    it('get conduit logo', () => {

        cy.viewport(1920, 1080);
        cy.visit('');
        cy.get('a[class="navbar-brand"]');

    });

    it('get nav-link', () => {
        cy.get('class="nav-link"');
    });


    it('get button', () => {
        cy.get('button');
    });


    it('get list item', () => {
        cy.get('app-article-list-item')
    });

    it('get div.sidebar', () => {
        cy.get('div.sidebar')
    });
});
