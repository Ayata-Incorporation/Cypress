var careersName="Careeers B"
var gradeName ="Grade G"

describe('Login Test', () => {
    it('passes', () => {
      cy.visit('https://admin.unentrance.com/')
  
  /* Username and password*/
      cy.get('input[name="identity"]').type('superadmin');
      cy.get('input[name="password"]').type('superadmin');
      // click login button
      cy.get('button[type="submit"]').click();

      //Forms
      cy.get('[href="/careers"] > .sidebar_menu_item').click();
      cy.get('._button_1ejx6_24').click();
      cy.get('#name').type(careersName);
      cy.get('#description').type('this is test')
      cy.get('[type="submit"]').click();
    })
  })
