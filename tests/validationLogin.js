import { test } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { HomePage } from '../pages/home';
import { invalidEmail, notRegiEmail, password } from '../data-config';

export const validationsLogin = () => {

    test("Validate user cannot login to the account without entering the username & password", async ({ page }) => {

        const HomeObj = new HomePage(page);
        const LoginObj = new LoginPage(page);

        await HomeObj.gotoHomePage();
        await HomeObj.gotoLoginPage();

        await LoginObj.clickLoginBtn();

        await LoginObj.emptyEmail();



    })

    test('Validate user cannot login to the site by entering an email that not registered', async ({ page }) => {

        const HomeObj = new HomePage(page);
        const LoginObj = new LoginPage(page);

        await HomeObj.gotoHomePage();
        await HomeObj.gotoLoginPage();
        await LoginObj.login(notRegiEmail, password);

        await LoginObj.clickLoginBtn();
        await LoginObj.notRegisteredEmailAccount();
        await page.pause();


    })




    test.only('Validate user cannot enter an invalid email', async ({ page }) => {

        const HomeObj = new HomePage(page);
        const LoginObj = new LoginPage(page);

        await HomeObj.gotoHomePage();
        await HomeObj.gotoLoginPage();
        await LoginObj.login(invalidEmail, password);

        await LoginObj.clickLoginBtn();
        await LoginObj.invalidEmailError();



    })

}