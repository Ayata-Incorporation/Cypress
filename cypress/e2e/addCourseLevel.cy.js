var levelTypeName ="Level Type Q"
var levelName="Level Q"

describe('Login Test', () => {
    it('passes', () => {
      cy.visit('https://admin.unentrance.com/')
  
  /* Username and password*/
      cy.get('input[name="identity"]').type('superadmin');
      cy.get('input[name="password"]').type('superadmin');
      // click login button
      cy.get('button[type="submit"]').click();

      // Add Level Type
      cy.get('[href="/level-type"] > .sidebar_menu_item').click();
      cy.get('._button_1ejx6_24').click();
      cy.get('#name').type(levelTypeName);
      cy.get('#description').type('This is test')
      cy.get('[type="submit"]').click();

      //Add Level
      cy.get('.levelTab > :nth-child(2)').click();
      cy.get('._button_1ejx6_24').click();
      cy.get('#react-select-3-placeholder').type(levelTypeName +'{enter}');
      cy.get('#name').type(levelName);
      cy.get('#description').type('this is test ');
      cy.get('[type="submit"]').click();
    })
  })