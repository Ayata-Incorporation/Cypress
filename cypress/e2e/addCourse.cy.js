var CourseName="Course A"
var gradeName="Grade G"

describe('Login Test', () => {
    it('passes', () => {
      cy.visit('https://admin.unentrance.com/')
  
  /* Username and password*/
      cy.get('input[name="identity"]').type('superadmin');
      cy.get('input[name="password"]').type('superadmin');
      // click login button
      cy.get('button[type="submit"]').click();

      //Add course 
      cy.get('[href="/courses"] > .sidebar_menu_item > .sidebar_menu_item_text').click();
      cy.get('a > ._button_1ejx6_24').click();
      cy.get('#name').type(CourseName);
      cy.get('#description').type('this is test ')
      cy.get('#react-select-2-placeholder').type(gradeName +'{enter}' );
      cy.get('[type="submit"]').click();
      
    })
  })
