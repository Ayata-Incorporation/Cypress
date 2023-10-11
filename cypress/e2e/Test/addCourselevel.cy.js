import { Data } from "../data";
const inputdata = new Data();

//login 
it('login', () => {
    cy.visit('https://admin.unentrance.com/')
    cy.get('input[name="identity"]').type(inputdata.loginuserName);
    cy.get('input[name="password"]').type(inputdata.password);
    cy.get('button[type="submit"]').click();

    // Add Level Type
    cy.get('[href="/level-type"] > .sidebar_menu_item').click();
    cy.get('._button_1ejx6_24').click();
    cy.get('#name').type(inputdata.levelTypeName);
    cy.get('#description').type('This is test')
    cy.get('[type="submit"]').click();

    //Add Level
    cy.get('.levelTab > :nth-child(2)').click();
    cy.get('._button_1ejx6_24').click();
    cy.get('#react-select-3-placeholder').type(inputdata.levelTypeName +'{enter}');
    cy.get('#name').type(inputdata.levelName);
    cy.get('#description').type('this is test ');
    cy.get('[type="submit"]').click();
})