import { test } from '@playwright/test';
import { HomePage } from '../pages/home';
import { RegisterPage } from '../pages/register'
import { companyname, confirmpassword, email, firstname, lastname, password } from '../data-config';

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

test.only('Required message validation in Last Name field',async({page})=>{

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

    await page.pause();
    await RegisterObj.validationLastNameEmpty();


})

}
