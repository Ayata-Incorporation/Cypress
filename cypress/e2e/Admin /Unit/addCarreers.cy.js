import { Data } from "../../admin data";
const inputdata = new Data();

it('login', () => {
    cy.visit('https://admin.unentrance.com/')
    cy.get('input[name="identity"]').type(inputdata.loginuserName);
    cy.get('input[name="password"]').type(inputdata.password);
    cy.get('button[type="submit"]').click();

    //Add careers
    cy.get('[href="/careers"] > .sidebar_menu_item').click();
    cy.get('._button_1ejx6_24').click();
    cy.get('.css-8mmkcg').type(inputdata.careersGrade);
    cy.get('#react-select-2-option-0').click();
    cy.get('#name').type(inputdata.careersName);
    cy.get('#description').type('this is test ');
    cy.get('[type="submit"]').click();

})