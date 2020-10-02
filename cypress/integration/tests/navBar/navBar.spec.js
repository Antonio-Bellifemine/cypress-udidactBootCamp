describe('nav-bar', () => {
    it('nav bar should have 5 selections', () => {
        cy.get('div[id="navbarsExampleDefault"] > ul').eq(0)
        cy.get('div[id="navbarsExampleDefault"] > ul').eq(1)
        cy.get('div[id="navbarsExampleDefault"] > ul').eq(2)
        cy.get('div[id="navbarsExampleDefault"] > ul').eq(3)
        cy.get('div[id="navbarsExampleDefault"] > ul').eq(4)
        
    });







    it('nav bar should have 5 selections', () => {
        cy.get('div[id="navbarsExampleDefault"]').within(() => {
            cy.get('li')
        })
    })
})