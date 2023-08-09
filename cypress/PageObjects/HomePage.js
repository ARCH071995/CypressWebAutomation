class HomePage
{   
    //Locator
    anmelDen = "a[title='Melden Sie sich mit Ihrem Tagesspiegel-Konto an']";

    //methods
    iOpenBrowser(baseURL)
    {
        cy.visit(baseURL)
    }

    iClickAnmelden()
    {
        cy.get(this.anmelDen).click()
    }

    iExpectHomeTitle(expectedTitle)
    {
        cy.title().should('include',expectedTitle)
    }

}

module.exports = new HomePage();