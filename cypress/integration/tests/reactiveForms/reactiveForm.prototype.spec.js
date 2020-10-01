// make this a const to make the code more business legible. also for the coders coming in 
// to code behind you. The variables should make sense. 

// the more you can make your code read easy, the better pattern(s) and habits you will form
const nameAndReleaseDate = 'div[class="form-row"]';

before('', () => {
    cy.visit('');
});

describe('Angular reactive forms', () => {

    it('should open the "prototype" ', () => {
        cy.get('ul[id="reactive-form-collapse"]').invoke('show');
        cy.get('li:eq(8)> ul').children().get(`li:eq(${9}) > a`).click();

        // now we'll put the prototype compoenent into scope so that it's easier to grab elements, due to there being less elements to grab. 
        cy.get('div[class="card-body"]').within('inside the prototype component',() => {
            cy.get(`${nameAndReleaseDate} > div:eq(0) > input`).clear().type('this is a test');
        });
        
    });

});