
before('visit baseUrl', () => {
    cy.visit('')
})

describe('Angular reactive forms', () => {

    it('should open the "reactive form" list', () => {
        cy.get('ul[id="reactive-form-collapse"]').invoke('show');

        // let's confirm the 'reactive form' list ois open by checking its nested values
        cy.get('li[class="my-1 active"]:eq(0) > ul').within(() => {
            cy.get('li').contains('prototype');
            cy.get('li').contains('form-control');
            cy.get('li').contains('form-control-class');
            cy.get('li').contains('form-group');
            cy.get('li').contains('form-builder');
            cy.get('li').contains('form-builder-nested');
            cy.get('li').contains('form-array');
            cy.get('li').contains('form-multi');
        });
    });

    it('should open the "Features form" list', () => {
        cy.get('ul[id="Features-collapse"]').invoke('show');
        cy.get('li[class="my-1 active"]:eq(1) > ul').within(() => {
            cy.get('li').contains('charts');
            cy.get('li').contains('leaflet');
            cy.get('li').contains('movies-images-list');
            cy.get('li').contains('httpclient');
            cy.get('li').contains('template-driven-forms');
            cy.get('li').contains('components');
            cy.get('li').contains('services');
        });
    });

    it('should open the "crud form" list', () => {
        cy.get('ul[id="crud-collapse"]').invoke('show');
        cy.get('li[class="my-1 active"]:eq(2) > ul').within(() => {
            cy.get('li').contains('continents');
            cy.get('li').contains('countries');
            cy.get('li').contains('cities');
            cy.get('li').contains('shows');
            cy.get('li').contains('movies');
            cy.get('li').contains('shows-images');
            cy.get('li').contains('movies-images');
        });
    });

    it('should open the "typescript form" list', () => {
        cy.get('ul[id="typescript-collapse"]').invoke('show');
        cy.get('li[class="my-1 active"]:eq(3) > ul').within(() => {
            cy.get('li').contains('modules');
            cy.get('li').contains('interfaces');
            cy.get('li').contains('classes');
            cy.get('li').contains('functions');
            cy.get('li').contains('types');
            cy.get('li').contains('typing-function');
        });
    });

    it('should open the "bootstrap-prototype form" list', () => {
        cy.get('ul[id="bootstrap-prototype-collapse"]').invoke('show');
        cy.get('li[class="my-1 active"]:eq(4) > ul').within(() => {
            cy.get('li').contains('alerts');
            cy.get('li').contains('badge');
            cy.get('li').contains('blockquotes');
            cy.get('li').contains('breadcrumb');
            cy.get('li').contains('buttons');
            cy.get('li').contains('collapse');
            cy.get('li').contains('dropdowns');
            cy.get('li').contains('list-group');
            cy.get('li').contains('modal');
            cy.get('li').contains('pagination');
            cy.get('li').contains('popovers');
            cy.get('li').contains('progress');
            cy.get('li').contains('spinners');
        });
    });
});