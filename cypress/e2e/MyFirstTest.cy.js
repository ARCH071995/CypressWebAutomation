import Login from "../PageObjects/LoginPage.js"
import HomePage from "../PageObjects/HomePage.js"
import MyAccountPage from "../PageObjects/MyAccount.js"

describe('First Test Suite', () => {

 // First Test Case
  it('Login Scenario - Verify if the user is logged in.', () => {
    
    cy.fixture('testData').then((data)=>{
    
      // Test Step 1 - Open Tagesspiegel.de
        HomePage.iOpenBrowser(data.baseURL);
        //assertion-Check the title on the webpage
        HomePage.iExpectHomeTitle(data.expectedTitle);
  
      // Test Step 2 - Click ‚Anmelden‘.
        HomePage.iClickAnmelden();
  
      // Test Step 3 - Insert login credentials.
        Login.iEnterUserName(data.username);
        Login.iEnterPassword(data.password);
  
      // Test Step 4 - Send login form.
        Login.iClickSubmit();
  
      // Test Step 5 - Verify user logged in.
        MyAccountPage.iVerifyMeinKonto(data.expectMyAccount);
       //To click on hidden element I have set force: True as the Test behaviour is different than manual
        MyAccountPage.iVerifyUserLoggedIn(data.username);
      })
    })
  })