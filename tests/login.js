import {test} from '@playwright/test';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { email, password } from '../data-config';

export const login = ()=>{

test('Verify user can successfully login to the account',async({page})=>{

    const HomeObj = new HomePage(page);
    const LoginObj = new LoginPage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoLoginPage();
    await LoginObj.loginWithValidCredentials(email,password);
})

}