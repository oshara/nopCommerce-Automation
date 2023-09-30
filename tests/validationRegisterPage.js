import { test } from '@playwright/test';
import { HomePage } from '../pages/home';
import { RegisterPage } from '../pages/register'
import { companyname, confirmpassword, email, firstname, invalidEmail, lastname, notmachingconfirmpassword, password, shortPassword } from '../data-config';

export const registerValidations= ()=>{

test('Required message validation on First Name field', async ({ page }) => {

    const HomeObj = new HomePage(page);
    const RegisterObj = new RegisterPage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoRegisterPage();

    await RegisterObj.selectGender();
    await RegisterObj.fillLastName(lastname);
    await RegisterObj.fillDOB();
    await RegisterObj.fillEmail(email);
    await RegisterObj.fillCompanyName(companyname);
    await RegisterObj.checkNewsLetter();
    await RegisterObj.fillPasswords(password, confirmpassword);
    await RegisterObj.clickRegisterBtn();

    await RegisterObj.validationFirstNameEmpty();

})

test('Required message validation in Last Name field',async({page})=>{

    const HomeObj = new HomePage(page);
    const RegisterObj = new RegisterPage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoRegisterPage();

    await RegisterObj.selectGender();
    await RegisterObj.fillFirstName(firstname)
    await RegisterObj.fillDOB();
    await RegisterObj.fillEmail(email);
    await RegisterObj.fillCompanyName(companyname);
    await RegisterObj.checkNewsLetter();
    await RegisterObj.fillPasswords(password, confirmpassword);
    await RegisterObj.clickRegisterBtn();

    await RegisterObj.validationLastNameEmpty();


})

test('Validation message check when email field is empty',async({page})=>{

    const HomeObj = new HomePage(page);
    const RegisterObj = new RegisterPage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoRegisterPage();

    await RegisterObj.selectGender();
    await RegisterObj.fillFirstName(firstname);
    await RegisterObj.fillLastName(lastname)
    await RegisterObj.fillDOB();
    await RegisterObj.fillCompanyName(companyname);
    await RegisterObj.checkNewsLetter();
    await RegisterObj.fillPasswords(password, confirmpassword);
    await RegisterObj.clickRegisterBtn();

    await RegisterObj.validationEmailEmpty();

})

test('Validation message when user enters a invalid email',async({page})=>{
    const HomeObj = new HomePage(page);
    const RegisterObj = new RegisterPage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoRegisterPage();

    await RegisterObj.selectGender();
    await RegisterObj.fillFirstName(firstname);
    await RegisterObj.fillLastName(lastname);
    await RegisterObj.fillEmail(invalidEmail);
    await RegisterObj.fillDOB();
    await RegisterObj.fillCompanyName(companyname);
    await RegisterObj.checkNewsLetter();
    await RegisterObj.fillPasswords(password, confirmpassword);
    await RegisterObj.clickRegisterBtn();
    await RegisterObj.validationWrongEmail();

})

test("Verifying the password empty password fields error",async({page})=>{
    const HomeObj = new HomePage(page);
    const RegisterObj = new RegisterPage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoRegisterPage();

    await RegisterObj.selectGender();
    await RegisterObj.fillFirstName(firstname);
    await RegisterObj.fillLastName(lastname);
    await RegisterObj.fillEmail(email);
    await RegisterObj.fillDOB();
    await RegisterObj.fillCompanyName(companyname);
    await RegisterObj.checkNewsLetter();
   
    await RegisterObj.clickRegisterBtn();
    
    await RegisterObj.validatingPasswordEmtpy();
    
})



 test("Validating error message when Password and Confirm Password does not match erorr",async({page})=>{
    const HomeObj = new HomePage(page);
    const RegisterObj = new RegisterPage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoRegisterPage();

    await RegisterObj.selectGender();
    await RegisterObj.fillFirstName(firstname);
    await RegisterObj.fillLastName(lastname);
    await RegisterObj.fillEmail(email);
    await RegisterObj.fillDOB();
    await RegisterObj.fillCompanyName(companyname);
    await RegisterObj.checkNewsLetter();
    await RegisterObj.fillPasswords(password,notmachingconfirmpassword);
   
    await RegisterObj.clickRegisterBtn();

    await page.pause();
    await RegisterObj.passwordNotMatchError();
    

 })

 test.only("Validating error message when user enter a short password",async({page})=>{
    const HomeObj = new HomePage(page);
    const RegisterObj = new RegisterPage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoRegisterPage();

    await RegisterObj.selectGender();
    await RegisterObj.fillFirstName(firstname);
    await RegisterObj.fillLastName(lastname);
    await RegisterObj.fillEmail(email);
    await RegisterObj.fillDOB();
    await RegisterObj.fillCompanyName(companyname);
    await RegisterObj.checkNewsLetter();
    await RegisterObj.fillPasswords(shortPassword,shortPassword);
   
    await RegisterObj.clickRegisterBtn();

    await page.pause();
    await RegisterObj.shortPasswordError();
    

 })
}

