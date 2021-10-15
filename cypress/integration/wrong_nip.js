it("should open allegro registraton company",() => {
    cy.visit('https://allegro.pl/rejestracja/konto-firmowe/nowe-konto')

    // consent 
    cy.contains('Ok, zgadzam się')
    .click()

    cy.get('h1').contains(' Utwórz konto')
    .should('be.visible')

    cy.get('#email')
    .should('be.visible')
    .type('example_123@gmail.com')

    cy.get('#login')
    .type('konradmamla')

    cy.get('#password')
    .type('Password1234')

    cy.get('#phone')
    .type('123456789')

    cy.get('#countryCode').select('Polska').should('have.value', 'PL')

    cy.get('#taxId')
    .type('61200')

    cy.get('[id^=startDownloadingCompanyData]').click({ multiple: true })


})