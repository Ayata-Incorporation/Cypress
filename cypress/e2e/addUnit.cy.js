var unitName= "Unit 2"
var gradeName ="Grade G"
var courseName="Course A"
const startDate = "2022-04-05"
const endDate ="2023-06-08 "

describe('Login Test', () => {
    it('passes', () => {
      cy.visit('https://admin.unentrance.com/')
  
  /* Username and password*/
      cy.get('input[name="identity"]').type('superadmin');
      cy.get('input[name="password"]').type('superadmin');
      // click login button
      cy.get('button[type="submit"]').click();

      //Add unit
      cy.get('[href="/units"] > .sidebar_menu_item').click()
      cy.get('a > ._button_1ejx6_24').click();
      cy.get('#name').type(unitName);
      cy.get('#description').type('this is test ')
      cy.get('#grade > .css-1fwpljd-control').type(gradeName +'{enter}')
      cy.get('#react-select-4-placeholder').type(courseName + '{enter}')
      // calendar
      cy.get('#startDate')
     .invoke('val', startDate)
     .trigger('input');
     cy.get('#endDate').type('2022-04-05')
     cy.get('[type="submit"]').click();
    })
  })