var userName="testaaaa"
var Roles ="Admin"
var firstName="testaaaa"
var lastName="testfaaaa"
var Email= "test2aa@gmail.com"
let phoneNumber= 98998787878

describe('Adding staff Test', () => {
    it('passes', () => {
      cy.visit('https://admin.unentrance.com/')
  
  /* Username and password*/
      cy.get('input[name="identity"]').type('superadmin');
      cy.get('input[name="password"]').type('superadmin');
      // click login button
      cy.get('button[type="submit"]').click();

      //Go to staff and click on add staff
      cy.contains(".sidebar_menu_item_text", "Staffs").click();
      cy.get('button[type="button"]._button_1ejx6_24[data-color="success"]').click();

      //Form fill
      cy.get('input[name="username"]').type(userName);
      // Click to open the dropdown
      cy.get('#role').click();
      // Select the desired option by its text
      cy.get('#role').contains(Roles).click();     
        cy.get('input[name="firstName"]').type(firstName);
        cy.get('input[name="lastName"]').type(lastName);
        cy.get('input[name="email"]').type(Email);
        cy.get('input[name="phoneNumber"]').type(phoneNumber);
        //Submit
        cy.get('button[type="submit"]').click(); 

        cy.get('button[type="submit"]').contains('Submit').click();
    })
  })