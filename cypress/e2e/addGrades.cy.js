describe('addGrades',()=>{
    it('test',()=>{
        cy.visit('https://admin.unentrance.com/')
        
        /* Username and password*/
      cy.get('input[name="identity"]').type('superadmin');
      cy.get('input[name="password"]').type('superadmin');
      // click login button
      cy.get('button[type="submit"]').click();

        
    })
})