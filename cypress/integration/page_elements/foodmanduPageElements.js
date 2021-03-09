export class FoodmanduElemets
{
// User login elements.
    loginButton()
    {
        return cy.get('.list-inline > :nth-child(2) > .btn')
    }

    emailField()
    {
        return cy.get('.row > :nth-child(1) > .ng-pristine')
    }

    passwordField()
    {
        return cy.get('.login-form > .row > :nth-child(2) > .form-control')
    }

    loginButtonToLogin()
    {
        return cy.get('.login-form > .row > :nth-child(4) > .btn')
    }
    


    //User search food item elements
    searchField()
    {
        return cy.get('.col-md-9 > .search')
    }


    foodItem()
    {
        return cy.get(':nth-child(1) > .listing > .listing__photo > a > .progressive > .progressive__img')
    }


    addButton()
    {
        return cy.get('[style=""] > .nav > :nth-child(2) > .menu__price > a > .icomoon')
    }

    notesSection()
    {
        return cy.get('p > .form-control')
    }

    addToBagButton()
    {
        return cy.get('.item__footer > :nth-child(1) > :nth-child(2) > .btn')
    }


    //User logout 
    profileButton()
    {
        return cy.get('[title="My Profile"] > .icomoon')
    }

    logOutButton()
    {
        return cy.get('#logoutForm')
    }

}