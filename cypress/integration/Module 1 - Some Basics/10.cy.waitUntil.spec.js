describe(() => {
    cy.visit('')
    cy.get().title().then(x => { })
    cy.log(x)
})