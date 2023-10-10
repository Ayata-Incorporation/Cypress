var schoolName="Myschool"
var subDomain ="subdom"
let taxPayerId=11111
var contactName="Ram"
var Email="Ram@test.com"
let cellNumber= 123456789
var Country = 'Nepal'
let phoneNumber=9878787878
var selectCountry="Ar"
var addressMunicipality="Kathmandu"
var address1="Anamnagar"
var address2="Baneshwor"
var departmentName="IT"
var planName ="Evening"
var deliveryModality="Presencial"

describe('Login Test', () => {
    it('passes', () => {
      cy.visit('https://admin.unentrance.com/')
  
  /* Username and password*/
      cy.get('input[name="identity"]').type('superadmin');
      cy.get('input[name="password"]').type('superadmin');
      // click login button
      cy.get('button[type="submit"]').click();

      //Go to schools page
      cy.contains(".sidebar_menu_item_text","Schools").click();
      cy.get('button._button_1ejx6_24.button[data-color="success"][data-fontsize="small"]').click();
      //Basic forms
      cy.get('input[name="name"]').type(schoolName)
      cy.get('input[name="subDomain"]').type(subDomain)
      cy.get('input[placeholder="Enter tax payer Id"]').type(taxPayerId)
      cy.get('#react-select-2-placeholder').click();
      cy.get('#react-select-2-option-0').click();
      cy.get('button[type="submit"]').click();
      
      //Contact forms
      cy.get('input[name="contact.contactName"]').type(contactName)
      cy.get ('input[name="contact.email"]').type (Email)
      cy.get ('.react-international-phone-country-selector-button__button-content').click();
      cy.contains('span.react-international-phone-country-selector-dropdown__list-item-country-name', Country).click();
      cy.get('input[placeholder="Enter cell phone no."]').type(cellNumber)
      cy.get('input[name="contact.phoneNumber"]').type(phoneNumber);
      cy.get('button[type="submit"]').contains('Next >').click();

      //Address forms
      cy.get('#react-select-3-input').click({force: true });
      cy.get('#react-select-3-input').type(selectCountry).type('{enter}');
      cy.get('input[name="address.municipality"]').type(addressMunicipality)
      cy.get('input[name="address.address1"]').type(address1)
      cy.get('input[name="address.address2').type(address2)
      cy.get('input[name="address.department"]').type(departmentName)
      cy.get('button[type="submit"]').contains('Next >').click();

      //Feature forms
      cy.get('#react-select-4-placeholder').click();
      cy.get('.css-d7l1ni-option').click(); // select option daily 
      cy.get('.css-wcpg89-placeholder').click();
      cy.get('.css-d7l1ni-option').click();
      cy.get('input[name="feature.educationLevels"]').check()
      
      //submit
      cy.get('button[type="button"]').contains('Submit >').click();
      //confirm submit 
      cy.get('button[type="submit"]').contains('Confirm Submit').click();
    })
  })
