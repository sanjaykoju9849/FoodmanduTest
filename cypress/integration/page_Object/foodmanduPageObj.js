const {FoodmanduElemets} = require('../../integration/page_elements/foodmanduPageElements')
const foodmanduElemetsObj = new FoodmanduElemets();

export function userLogin()
{
    foodmanduElemetsObj.loginButton().click()
    foodmanduElemetsObj.emailField().type(Cypress.env('user_dev').email)
    foodmanduElemetsObj.passwordField().type(Cypress.env('user_dev').password)
    foodmanduElemetsObj.loginButtonToLogin().click()
}

export function searchFoodItem()
{
    foodmanduElemetsObj.searchField().type("momo").type('{enter}')
    cy.wait(1000)
    foodmanduElemetsObj.foodItem().click()
    cy.wait(1000)
    foodmanduElemetsObj.addButton().click()
    cy.wait(1000)
    foodmanduElemetsObj.notesSection().type("Momo is the neplese favourite food and is loved by all and in all time.")
    cy.wait(1000)
    foodmanduElemetsObj.addToBagButton().click()
    cy.wait(1000)
}

export function UserLogout()
{
    foodmanduElemetsObj.profileButton().click({force: true})
    cy.wait(1000)
    foodmanduElemetsObj.logOutButton().click()
    cy.wait(1000)
}