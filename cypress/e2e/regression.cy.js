var userName=""
var Roles ="Admin" // specific
var firstName=""
var lastName=""
var Email= ""
let phoneNumber= 98998787800
var schoolName=""
var subDomain =""
let taxPayerId=""
var contactName=""
let cellNumber= ""
var Country = 'Nepal' // specific
var selectCountry="Ar" //// specific
var addressMunicipality=""
var address1=""
var address2=""
var departmentName=""
var planName ="Evening" // specific
var deliveryModality="Presencial" // specific
var gradecategoryName=" "
var gradeName="Grade A" // specific
var careersName=" "
var CourseName=""
var levelTypeName =""
var levelName=""
var unitName= ""
var courseName=""
const startDate = "2022-04-05"
const endDate ="2023-06-08 "

describe('Login Test', () => {
    it('passes', () => {
      cy.visit('https://admin.unentrance.com/')

  //Login 
  /* Username and password*/
      cy.get('input[name="identity"]').type('superadmin');
      cy.get('input[name="password"]').type('superadmin');
      // click login button
      cy.get('button[type="submit"]').click();

      //Add staffs
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

        //Add schools
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
      cy.get('.d-flex > :nth-child(3) > input').check()
      //submit
      cy.get('button[type="button"]').contains('Submit >').click();
      //confirm submit 
      cy.get('button[type="submit"]').contains('Confirm Submit').click();

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

     //Careers Forms
     cy.get('[href="/careers"] > .sidebar_menu_item').click();
     cy.get('._button_1ejx6_24').click();
     cy.get('#name').type(careersName);
     cy.get('#description').type('this is test')
     cy.get('[type="submit"]').click();

     //Add course 
      cy.get('[href="/courses"] > .sidebar_menu_item > .sidebar_menu_item_text').click();
      cy.get('a > ._button_1ejx6_24').click();
      cy.get('#name').type(CourseName);
      cy.get('#description').type('this is test ')
      cy.get('#react-select-2-placeholder').type(gradeName +'{enter}' );
      cy.get('[type="submit"]').click();

      // Add Course Level Type
      cy.get('[href="/level-type"] > .sidebar_menu_item').click();
      cy.get('._button_1ejx6_24').click();
      cy.get('#name').type(levelTypeName);
      cy.get('#description').type('This is test')
      cy.get('[type="submit"]').click();

      //Add Course Level
      cy.get('.levelTab > :nth-child(2)').click();
      cy.get('._button_1ejx6_24').click();
      cy.get('#react-select-3-placeholder').type(levelTypeName +'{enter}');
      cy.get('#name').type(levelName);
      cy.get('#description').type('this is test ');
      cy.get('[type="submit"]').click();

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
