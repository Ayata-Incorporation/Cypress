import { Data } from "../../admin data";
const inputdata = new Data();

//login 
it('login', () => {
    cy.visit('https://admin.unentrance.com/')
    cy.get('input[name="identity"]').type(inputdata.loginuserName);
    cy.get('input[name="password"]').type(inputdata.password);
    cy.get('button[type="submit"]').click();

    //Grade category
    cy.get('[href="/grades"] > .sidebar_menu_item > .sidebar_menu_item_text').click();
    cy.get('._button_1ejx6_24').click();
    cy.get('#name').type(inputdata.gradecategoryName);
    cy.get('#description').type('This.test')
    cy.get('[type="submit"]').click();
    // Add Grade
    cy.get('.d-flex > :nth-child(2)').click();
    cy.get('._button_1ejx6_24').click();
    cy.get('#react-select-3-placeholder').click();
    cy.contains(inputdata.gradecategoryName).click();
    cy.get('#name').type(inputdata.gradeName).click();
    cy.get('#description').type('This is test');
    cy.get('[type="submit"]').click();
})