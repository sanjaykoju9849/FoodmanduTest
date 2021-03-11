import * as foodmanduPageObj from "../../integration/page_Object/foodmanduPageObj";


describe('Foodmandu login to add food in cart test', () => {
    before(() => {
        cy.clearCookies();
    });
   
    beforeEach(() => {
        Cypress.Cookies.preserveOnce(".AspNet.ApplicationCookie");
        cy.visit("https://foodmandu.com/");
    });

    it('Visit Foodmandu landing page and login.', () => {
        foodmanduPageObj.userLogin()
    });

    it('User search food and Add to Bag test.', () => {
        foodmanduPageObj.searchFoodItem()
    });

   
    it('User Logout test.', () => {
        foodmanduPageObj. UserLogout()
    });
});