import { Data } from "../../admin data";
const inputdata = new Data();

it('login', () => {
    cy.visit('https://admin.unentrance.com/')
    cy.get('input[name="identity"]').type(inputdata.loginuserName);
    cy.get('input[name="password"]').type(inputdata.password);
      cy.get('button[type="submit"]').click();

      //Add lesson
      cy.get('[href="/lessons"] > .sidebar_menu_item > .sidebar_menu_item_text').click();
      cy.get('.actions > ._button_1ejx6_24').click();
      cy.get('#title').type(inputdata.lessonName);
      cy.get('#description').type('this is test ');
      cy.get('#grade > .css-1fwpljd-control').type(inputdata.lessonGrade);
      cy.get('.css-d7l1ni-option').click();
      cy.get('#react-select-7-placeholder').type(inputdata.lessonUnit);
      cy.get('.css-d7l1ni-option').click();
      cy.get('#react-select-9-placeholder').type(inputdata.lessonIndicator);
      cy.get('.css-d7l1ni-option').click();
      cy.get('[type="submit"]').click();
      
    

      
  
})