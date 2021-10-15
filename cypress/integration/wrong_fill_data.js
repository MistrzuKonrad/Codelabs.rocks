it("should open allegro registraton company",() => {
    cy.visit('https://allegro.pl/rejestracja/konto-firmowe/nowe-konto')

    // consent 
    cy.contains('Ok, zgadzam się')
    .click()

    cy.get('h1').contains(' Utwórz konto')
    .should('be.visible')

    cy.get('#email')
    .should('be.visible')
    .type('example_123gmail')

    cy.get('#login')
    .type('konra dmamla')

    cy.get('#password')
    .type('123')

    cy.get('#phone')
    .type('123456722389')

    cy.get('#countryCode').select(' pozostałe kraje ... ').should('have.value', '-1')

    cy.get('#taxId')
    .type('61200218444')

    cy.get('[id^=startDownloadingCompanyData]').click({ multiple: true })





    
    

})