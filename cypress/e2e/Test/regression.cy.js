import { Data } from "../data";
const inputdata = new Data();

it('login', () => {
    cy.visit('https://admin.unentrance.com/')
    cy.get('input[name="identity"]').type(inputdata.loginuserName);
    cy.get('input[name="password"]').type(inputdata.password);
      cy.get('button[type="submit"]').click();

//login 
it('login', () => {
    cy.visit('https://admin.unentrance.com/')
    cy.get('input[name="identity"]').type(inputdata.loginuserName);
    cy.get('input[name="password"]').type(inputdata.password);
    cy.get('button[type="submit"]').click();

    //Add staffs
    cy.contains(".sidebar_menu_item_text", "Staffs").click();
      cy.get('button[type="button"]._button_1ejx6_24[data-color="success"]').click();
      //Form fill
      cy.get('input[name="username"]').type(inputdata.staffuserName);
      // Click to open the dropdown
      cy.get('#role').click();
      // Select the desired option by its text
      cy.get('#role').contains(inputdata.staffRoles).click();     
        cy.get('input[name="firstName"]').type(inputdata.stafffirstName);
        cy.get('input[name="lastName"]').type(inputdata.stafflastName);
        cy.get('input[name="email"]').type(inputdata.staffEmail);
        cy.get('input[name="phoneNumber"]').type(inputdata.staffphoneNumber);
        //Submit
        cy.get('button[type="submit"]').click(); 

        cy.get('button[type="submit"]').contains('Submit').click();



  
})
})