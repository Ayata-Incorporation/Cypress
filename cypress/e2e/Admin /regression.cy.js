import { Data } from "../admin data";
const inputdata = new Data();

describe('add', () => {
it('login', () => {
  cy.visit('https://admin.unentrance.com/')
  cy.get('input[name="identity"]').type(inputdata.loginuserName);
  cy.get('input[name="password"]').type(inputdata.password);
  cy.get('button[type="submit"]').click();

    //Add staffs
    cy.contains(".sidebar_menu_item_text", "Staffs").click();
    cy.get('button[type="button"]._button_1ejx6_24[data-color="success"]').click();
    //Form fill
    cy.get('input[name="username"]').type(inputdata.staffuserName);
    // Click to open the dropdown
    cy.get('#role').click();
    // Select the desired option by its text
    cy.get('#role').contains(inputdata.staffRoles).click();
    cy.get('input[name="firstName"]').type(inputdata.stafffirstName);
    cy.get('input[name="lastName"]').type(inputdata.stafflastName);
    cy.get('input[name="email"]').type(inputdata.staffEmail);
    cy.get('input[name="phoneNumber"]').type(inputdata.staffphoneNumber);
    //Submit
    cy.get('button[type="submit"]').click();
    cy.get('button[type="submit"]').click();

    //Go to schools page
    cy.contains(".sidebar_menu_item_text", "Schools").click();
    cy.get('button._button_1ejx6_24.button[data-color="success"][data-fontsize="small"]').click();
    //Basic forms
    cy.get('input[name="name"]').type(inputdata.schoolName)
    cy.get('input[name="subDomain"]').type(inputdata.schoolsubDomain)
    cy.get('input[placeholder="Enter tax payer Id"]').type(inputdata.schooltaxPayerId)
    cy.get('#react-select-3-placeholder').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('button[type="submit"]').click();
    //Contact forms
    cy.get('input[name="contact.contactName"]').type(inputdata.schoolcontactName)
    cy.get('input[name="contact.email"]').type(inputdata.schoolEmail)
    cy.get('.react-international-phone-country-selector-button__button-content').click();
    cy.contains('span.react-international-phone-country-selector-dropdown__list-item-country-name', inputdata.schoolCountry).click();
    cy.get('input[placeholder="Enter cell phone no."]').type(inputdata.schoolcellNumber)
    cy.get('input[name="contact.phoneNumber"]').type(inputdata.schoolphoneNumber);
    cy.get('button[type="submit"]').contains('Next >').click();
    //Address forms
    cy.get('#react-select-4-placeholder').type(inputdata.schoolselectCountry);
    cy.get('.css-d7l1ni-option').click();

    cy.get('input[name="address.municipality"]').type(inputdata.schooladdressMunicipality)
    cy.get('input[name="address.address1"]').type(inputdata.schooladdress1)
    cy.get('input[name="address.address2').type(inputdata.schooladdress2)
    cy.get('input[name="address.department"]').type(inputdata.schooldepartmentName)
    cy.get('button[type="submit"]').contains('Next >').click();
    //Feature forms
    cy.get('#react-select-5-placeholder').click();
    cy.get('.css-d7l1ni-option').click(); // select option daily 
    cy.get('.css-wcpg89-placeholder').click();
    cy.get('.css-d7l1ni-option').click();
    cy.get('input[name="feature.educationLevels"]').check()
    //submit
    cy.get('.pull-right > ._button_1ejx6_24').click();
    //confirm submit 


    cy.get('button[type="submit"]').contains('Confirm Submit').click();
    //Grade category
    // cy.get('[href="/grades"] > .sidebar_menu_item > .sidebar_menu_item_text').click();
    // cy.get('._button_1ejx6_24').click();
    // cy.get('#name').type(inputdata.gradecategoryName);
    // cy.get('#description').type('This.test')
    // cy.get('[type="submit"]').click();
    // Add Grade
    cy.get('.d-flex > :nth-child(2)').click();
    cy.get('._button_1ejx6_24').click();
    cy.get('#react-select-3-placeholder').click();
    cy.contains(inputdata.gradecategoryName).click();
    cy.get('#name').type(inputdata.gradeName).click();
    cy.get('#description').type('This is test');
    cy.get('[type="submit"]').click();

    //Add careers
    cy.get('[href="/careers"] > .sidebar_menu_item').click();
    cy.get('._button_1ejx6_24').click();
    cy.get('.css-8mmkcg').type(inputdata.careersGrade);
    cy.get('#react-select-2-option-0').click();
    cy.get('#name').type(inputdata.careersName);
    cy.get('#description').type('this is test ');
    cy.get('[type="submit"]').click();

      //Add course 
      cy.get('[href="/courses"] > .sidebar_menu_item > .sidebar_menu_item_text').click();
      cy.get('._button_1ejx6_24').click();
      cy.get('#name').type(inputdata.CourseName);
      cy.get('#description').type('this is test ')
      cy.get('#react-select-2-placeholder').type(inputdata.coursegradeName +'{enter}' );
      cy.get('[type="submit"]').click();

      // Add Level Type
    cy.get('[href="/level-type"] > .sidebar_menu_item').click();
    cy.get('._button_1ejx6_24').click();
    cy.get('#name').type(inputdata.levelTypeName);
    cy.get('#description').type('This is test')
    cy.get('[type="submit"]').click();
    //Add Level
    cy.get('.levelTab > :nth-child(2)').click();
    cy.get('._button_1ejx6_24').click();
    cy.get('#react-select-3-placeholder').type(inputdata.levelTypeName +'{enter}');
    cy.get('#name').type(inputdata.levelName);
    cy.get('#description').type('this is test ');
    cy.get('[type="submit"]').click();

    //Add unit
    cy.get('[href="/units"] > .sidebar_menu_item').click()
    cy.get('a > ._button_1ejx6_24').click();
    cy.get('#name').type(inputdata.unitName);
    cy.get('#description').type('this is test ')
    cy.get('#grade > .css-1fwpljd-control').type(inputdata.unitgradeName +'{enter}')
    cy.get('#react-select-4-placeholder').type(inputdata.unitcourseName + '{enter}')
    // calendar
    cy.get('#startDate')
   .invoke('val', inputdata.startDate)
   .trigger('input');
   cy.get('#endDate').type('2022-04-05')
   cy.get('[type="submit"]').click();

   //Add Skills
   cy.get('[href="/skills"] > .sidebar_menu_item').click();
   cy.get('a > ._button_1ejx6_24').click();
   cy.get('#name').type(inputdata.skillName);
   cy.get('#description').type('this is test')
   cy.get('#react-select-2-placeholder').type(inputdata.skillGradename);
   cy.get('.css-d7l1ni-option').click();
 //   cy.get('#react-select-9-placeholder').type(inputdata.skillCareerName); // if careerr name available
 //   cy.get('#react-select-2-option-0').click();
 //   cy.get('#react-select-4-placeholder').type(inputdata.skillCourse); // if course name available
 //   cy.get('#react-select-2-option-0').click();
   cy.get('#react-select-7-placeholder').type(inputdata.skillLevelname);
   cy.get('.css-d7l1ni-option').click();;
   cy.get('[type="submit"]').click();

     //Add lesson
     cy.get('[href="/lessons"] > .sidebar_menu_item > .sidebar_menu_item_text').click();
     cy.get('.actions > ._button_1ejx6_24').click();
     cy.get('#title').type(inputdata.lessonName);
     cy.get('#description').type('this is test ');
     cy.get('#grade > .css-1fwpljd-control').type(inputdata.lessonGrade);
     cy.get('.css-d7l1ni-option').click();
     cy.get('#react-select-7-placeholder').type(inputdata.lessonUnit);
     cy.get('.css-d7l1ni-option').click();
     cy.get('#react-select-9-placeholder').type(inputdata.lessonIndicator);
     cy.get('.css-d7l1ni-option').click();
     cy.get('[type="submit"]').click();

})
  })