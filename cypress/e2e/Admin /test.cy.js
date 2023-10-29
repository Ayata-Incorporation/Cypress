import { Data } from "../admin data";
const inputdata = new Data();

it('login', () => {
    cy.visit('https://admin.unentrance.com/')
    cy.get('input[name="identity"]').type(inputdata.loginuserName);
    cy.get('input[name="password"]').type(inputdata.password);
      cy.get('button[type="submit"]').click();

      cy.get('[href="/courses"] > .sidebar_menu_item > .sidebar_menu_item_text').click();
      cy.get('a > ._button_1ejx6_24').click();
      cy.get('#react-select-2-placeholder').type ('Grade G');
      cy.get ('.css-d7l1ni-option').click();
})


//<div class=" css-d7l1ni-option" id="react-select-19-option-0" tabindex="-1">Grade G</div>
//<div class=" css-d7l1ni-option" id="react-select-19-option-1" tabindex="-1">Kafka</div>