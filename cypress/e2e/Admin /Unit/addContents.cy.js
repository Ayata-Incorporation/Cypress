import { Data } from "../../admin data";
const inputdata = new Data();

it('login', () => {
    cy.visit('https://admin.unentrance.com/')
    cy.get('input[name="identity"]').type(inputdata.loginuserName);
    cy.get('input[name="password"]').type(inputdata.password);
      cy.get('button[type="submit"]').click();
  
      cy.get('[href="/contents"] > .sidebar_menu_item').click();
      cy.get('a > ._button_1ejx6_24').click();
      
})