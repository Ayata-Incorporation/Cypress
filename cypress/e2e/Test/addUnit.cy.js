import { Data } from "../data";
const inputdata = new Data();

//login 
it('login', () => {
    cy.visit('https://admin.unentrance.com/')
    cy.get('input[name="identity"]').type(inputdata.loginuserName);
    cy.get('input[name="password"]').type(inputdata.password);
    cy.get('button[type="submit"]').click();

    //Add unit
    cy.get('[href="/units"] > .sidebar_menu_item').click()
    cy.get('a > ._button_1ejx6_24').click();
    cy.get('#name').type(inputdata.unitName);
    cy.get('#description').type('this is test ')
    cy.get('#grade > .css-1fwpljd-control').type(inputdata.unitgradeName +'{enter}')
    cy.get('#react-select-4-placeholder').type(inputdata.unitcourseName + '{enter}')
    // calendar
    cy.get('#startDate')
   .invoke('val', inputdata.startDate)
   .trigger('input');
   cy.get('#endDate').type('2022-04-05')
   cy.get('[type="submit"]').click();
})