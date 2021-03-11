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

    myBagItem()
    {
        return cy.get('div.ng-scope:nth-child(4) section.menu.main-space.mb-4 div.restaurant-front.spinner:nth-child(2) div.container div.row div.col-lg-3.hidden-md-down:nth-child(4) div.sticky-side > div.cart__content.spinner')
    }

    //User logout 
    profileIcon()
    {
        return cy.get('[title="My Profile"] > .icomoon')
    }


    editProfileButton()
    {
        return cy.get('.side-general__profile > :nth-child(4)')
    }

    logOutButton()
    {
        return cy.get('#logoutForm > .btn')
    }

}