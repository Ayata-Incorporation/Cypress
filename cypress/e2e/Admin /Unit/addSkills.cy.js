import { Data } from "../../admin data";
const inputdata = new Data();


//login 
it('login', () => {
  cy.visit('https://admin.unentrance.com/')
  cy.get('input[name="identity"]').type(inputdata.loginuserName);
  cy.get('input[name="password"]').type(inputdata.password);
  cy.get('button[type="submit"]').click();
  
      //Add Skills
      cy.get('[href="/skills"] > .sidebar_menu_item').click();
      cy.get('a > ._button_1ejx6_24').click();
      cy.get('#name').type(inputdata.skillName);
      cy.get('#description').type('this is test')
      cy.get('#react-select-2-placeholder').type(inputdata.skillGradename);
      cy.get('.css-d7l1ni-option').click();
    //   cy.get('#react-select-9-placeholder').type(inputdata.skillCareerName); // if careerr name available
    //   cy.get('#react-select-2-option-0').click();
    //   cy.get('#react-select-4-placeholder').type(inputdata.skillCourse); // if course name available
    //   cy.get('#react-select-2-option-0').click();
      cy.get('#react-select-7-placeholder').type(inputdata.skillLevelname);
      cy.get('.css-d7l1ni-option').click();;
      cy.get('[type="submit"]').click();

})