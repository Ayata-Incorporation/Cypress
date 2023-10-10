var gradecategoryName="Grade G"
var gradeName="Grade G"

describe('addGrades',()=>{
    it('test',()=>{
        cy.visit('https://admin.unentrance.com/')
        
        /* Username and password*/
      cy.get('input[name="identity"]').type('superadmin');
      cy.get('input[name="password"]').type('superadmin');
      // click login button
      cy.get('button[type="submit"]').click();

      //Grade category
      cy.get('[href="/grades"] > .sidebar_menu_item > .sidebar_menu_item_text').click();
      cy.get('._button_1ejx6_24').click();
      cy.get('#name').type(gradecategoryName);
      cy.get('#description').type('This.test')
      cy.get('[type="submit"]').click();
        
      // Add Grade
      cy.get('.d-flex > :nth-child(2)').click();
      cy.get('._button_1ejx6_24').click();
      cy.get('#react-select-3-placeholder').click();
      cy.contains(gradecategoryName).click();
      cy.get('#name').type(gradeName).click();
      cy.get('#description').type('This is test');
      cy.get('[type="submit"]').click();

    })
})
