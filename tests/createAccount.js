import {test} from '@playwright/test';
import { HomePage } from '../pages/home';
import { RegisterPage } from '../pages/register';
import { companyname, confirmPassword, confirmpassword, email, firstname, lastname, password } from '../data-config';

export const createAccount = ()=>{

test('Verify user can create a account',async({page})=>{

    const HomeObj = new HomePage(page);
    const RegisterObj = new RegisterPage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoRegisterPage();

    await RegisterObj.selectGender();
    await RegisterObj.fillFirstName(firstname);
    await RegisterObj.fillLastName(lastname);
    await RegisterObj.fillDOB();
    await RegisterObj.fillEmail(email);
    await RegisterObj.fillCompanyName(companyname);
    await RegisterObj.checkNewsLetter();
    await RegisterObj.fillPasswords(password,confirmpassword);
    await RegisterObj.clickRegisterBtn();

   
})

}