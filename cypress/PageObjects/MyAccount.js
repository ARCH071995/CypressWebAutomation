class MyAccountPage
{
    meinKonto=".profile-text";
    MyProfile="div[class='menu__nav__list'] a[class='sso-link sso-link--my-account']";
    Myemail="[class='value']";

    iVerifyMeinKonto(expectMyAccount)
    {
        cy.get(this.meinKonto).should('contain', expectMyAccount)
    }

    iVerifyUserLoggedIn(username)
    {
        cy.get(this.MyProfile).click({ force: true }) 
        cy.get(this.Myemail).should('contain',username)
    }

}

module.exports = new MyAccountPage();