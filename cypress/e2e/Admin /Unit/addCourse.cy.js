import { Data } from "../../admin data";
const inputdata = new Data();

//login 
it('login', () => {
    cy.visit('https://admin.unentrance.com/')
    cy.get('input[name="identity"]').type(inputdata.loginuserName);
    cy.get('input[name="password"]').type(inputdata.password);
    cy.get('button[type="submit"]').click();

     //Add course 
     cy.get('[href="/courses"] > .sidebar_menu_item > .sidebar_menu_item_text').click();
     cy.get('a > ._button_1ejx6_24').click();
     cy.get('#name').type(inputdata.CourseName);
     cy.get('#description').type('this is test ')
     cy.get('#react-select-2-placeholder').type(inputdata.coursegradeName +'{enter}' );
     cy.get('[type="submit"]').click();
})