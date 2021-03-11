const {FoodmanduElemets} = require('../../integration/page_elements/foodmanduPageElements')
const foodmanduElemetsObj = new FoodmanduElemets();

export function userLogin()
{
    foodmanduElemetsObj.loginButton().click().then(()=>{
        foodmanduElemetsObj.emailField().should('be.visible').should('be.empty').then(()=>{
            foodmanduElemetsObj.emailField().type(Cypress.env('user_dev').email)
        }) 
        foodmanduElemetsObj.passwordField().should('be.visible').should('be.empty').then(()=>{
            foodmanduElemetsObj.passwordField().type(Cypress.env('user_dev').password)
        }) 

    })
    foodmanduElemetsObj.loginButtonToLogin().click().then(()=>{
        foodmanduElemetsObj.profileIcon().should('be.visible')
    })
}

export function searchFoodItem()
{
    foodmanduElemetsObj.searchField().type("momo").type('{enter}').then(()=>{
        cy.wait(1000)
        //Atleast one food item is searched and vaidated that atleast one (:nth-child(1) is visible to click.)
        cy.url().should('include','momo').then(()=>{
        foodmanduElemetsObj.foodItem().should('be.visible').then((element)=>{
            element.click()
            cy.wait(1000)
            foodmanduElemetsObj.addButton().click()
            cy.wait(1000)
            foodmanduElemetsObj.notesSection().should('be.empty').type("Momo is the neplese favourite food and is loved by all and in all time.")
            cy.wait(1000)
            foodmanduElemetsObj.addToBagButton().click().then(()=>{
                foodmanduElemetsObj.myBagItem().should('be.visible')
            })
            cy.wait(2000)    
                           
        })     
        })
        
    })
    
   
   
}

export function UserLogout()
{
    cy.wait(1000)
    foodmanduElemetsObj.profileIcon().click({force: true})
    cy.wait(1000)
    foodmanduElemetsObj.editProfileButton().click()
    cy.url().then((url)=>{
        if(url=="https://foodmandu.com/Manage/Index")
        {
            console.log("User reached profile page.")
            cy.wait(2000)
            foodmanduElemetsObj.logOutButton().click()
        }else
        {
            console.log("Edit profile failed.")
        }
    })
    
 
}