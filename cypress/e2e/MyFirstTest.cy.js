describe('First Test Suite', () => {

    // First Test Case
    it('Login Scenario - Verify if the user is logged in.', () => {
    
    // Test Step 1 - Open Tagesspiegel.de
      cy.visit('https://www.tagesspiegel.de/')
      //assertion-Check the title on the webpage
      cy.title().should('include','Aktuelle News: Nachrichten aus Berlin und der Welt')
      cy.clearAllCookies()

    // Test Step 2 - Click ‚Anmelden‘.
      cy.get("a[title='Melden Sie sich mit Ihrem Tagesspiegel-Konto an']").click()

      
    // Test Step 3 - Insert login credentials.
      //Enter First Iframe
      cy.get('#modal-iframe')
           .its('0.contentDocument.body')
           .find("[name='email'][autocomplete='username']")
           .type('qa.tagesspiegel+task@gmail.com')
           .should('have.value','qa.tagesspiegel+task@gmail.com')

      cy.get('#modal-iframe')
           .its('0.contentDocument.body')
           .find("[name='password'][autocomplete='current-password']")
           .type('tages123!')
           .should('have.value','tages123!')

    // Test Step 4 - Send login form.
      cy.get('#modal-iframe')
           .its('0.contentDocument.body')
           .find("[value='Anmelden'][type='submit'][class='form-button'][name='submit_input']").click('center')
      cy.wait(2000) // wait for 2 seconds
      cy.reload()
      cy.wait(1000) // wait for 1 seconds

    // Test Step 5 - Verify user logged in.
     cy.get(".profile-text").should('contain', 'Mein Konto')

     //To click on hidden element I have set force: True as the Test behaviour is different than manual
     cy.get("div[class='menu__nav__list'] a[class='sso-link sso-link--my-account']").click({ force: true }) 
     cy.get("[class='value']").should('contain','qa.tagesspiegel+task@gmail.com')
    })
  })