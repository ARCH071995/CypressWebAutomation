class Login
{
    //Locators
    iframe="#modal-iframe";
    documentBody="0.contentDocument.body";
    txtUserName="[name='email'][autocomplete='username']";
    txtPassword="[name='password'][autocomplete='current-password']";
    anmeldenButton="[value='Anmelden'][type='submit'][class='form-button'][name='submit_input']";
    
    //methods
    iEnterUserName(username)
    {
        cy.get(this.iframe)
           .its(this.documentBody)
           .find(this.txtUserName)
           .type(username)
           .should('have.value',username)
    }

    iEnterPassword(password)
    {
        cy.get(this.iframe)
           .its(this.documentBody)
           .find(this.txtPassword)
           .type(password)
           .should('have.value',password)
    }

    iClickSubmit()
    {
        cy.get(this.iframe)
           .its(this.documentBody)
           .find(this.anmeldenButton).click('center')
        cy.wait(2000) // wait for 2 seconds
        cy.reload()
        cy.wait(1000) // wait for 1 seconds
    }
}

module.exports = new Login();