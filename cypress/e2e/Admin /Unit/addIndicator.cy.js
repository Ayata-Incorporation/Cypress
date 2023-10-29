import { Data } from "../../admin data";
const inputdata = new Data();

it('login', () => {
    cy.visit('https://admin.unentrance.com/')
    cy.get('input[name="identity"]').type(inputdata.loginuserName);
    cy.get('input[name="password"]').type(inputdata.password);
      cy.get('button[type="submit"]').click();
  
      cy.get('[href="/indicators"] > .sidebar_menu_item').click();
      cy.get('a > ._button_1ejx6_24').click();
      cy.get('#name').type(inputdata.indicatorName);
      cy.get('#description').type('this is test ');
      cy.get('#react-select-2-placeholder').type(inputdata.indicatorGrade);
      cy.get('.css-d7l1ni-option').click();
      cy.get('#react-select-7-placeholder').type(inputdata.indicatorUnit);
      cy.get('.css-d7l1ni-option').click();
    //   cy.get('#react-select-8-placeholder').type(inputdata.indicatorSkills);
    //   cy.get('#react-select-7-option-1').click();
    cy.get('[type="submit"]').click();
})