import { Data } from "../../admin data";
const inputdata = new Data();

//login 
it('login', () => {
    cy.visit('https://admin.unentrance.com/')
    cy.get('input[name="identity"]').type(inputdata.loginuserName);
    cy.get('input[name="password"]').type(inputdata.password);
    cy.get('button[type="submit"]').click();

//Go to schools page
cy.contains(".sidebar_menu_item_text","Schools").click();
cy.get('button._button_1ejx6_24.button[data-color="success"][data-fontsize="small"]').click();
//Basic forms
cy.get('input[name="name"]').type(inputdata.schoolName)
cy.get('input[name="subDomain"]').type(inputdata.schoolsubDomain)
cy.get('input[placeholder="Enter tax payer Id"]').type(inputdata.schooltaxPayerId)
cy.get('#react-select-2-placeholder').click();
cy.get('#react-select-2-option-0').click();
cy.get('button[type="submit"]').click();

//Contact forms
cy.get('input[name="contact.contactName"]').type(inputdata.schoolcontactName)
cy.get ('input[name="contact.email"]').type (inputdata.schoolEmail)
cy.get ('.react-international-phone-country-selector-button__button-content').click();
cy.contains('span.react-international-phone-country-selector-dropdown__list-item-country-name', inputdata.schoolCountry).click();
cy.get('input[placeholder="Enter cell phone no."]').type(inputdata.schoolcellNumber)
cy.get('input[name="contact.phoneNumber"]').type(inputdata.schoolphoneNumber);
cy.get('button[type="submit"]').contains('Next >').click();

//Address forms
cy.get('#react-select-3-input').click({force: true });
cy.get('#react-select-3-input').type(inputdata.schoolselectCountry).type('{enter}');
cy.get('input[name="address.municipality"]').type(inputdata.schooladdressMunicipality)
cy.get('input[name="address.address1"]').type(inputdata.schooladdress1)
cy.get('input[name="address.address2').type(inputdata.schooladdress2)
cy.get('input[name="address.department"]').type(inputdata.schooldepartmentName)
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