const { expect } = require("@playwright/test");
const { email } = require("../data-config");

exports.LoginPage = class LoginPage{
    constructor(page){
        this.page= page;
        this.emailField = page.locator('input#Email');
        this.passwordField = page.locator('input#Password');
        this.loginBtn = page.locator('//button[@class="button-1 login-button"]');
        this.emptyEmailError = page.locator('#Email-error');
        this.notRgisteredError = page.locator('//div[@class="message-error validation-summary-errors"]');
    }

    async login(email,password){
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
       // await this.loginBtn.click();
    }

    async clickLoginBtn(){
        await this.loginBtn.click();
    }

    async emptyEmail(){
        expect(this.emptyEmailError).toHaveText('Please enter your email');
    }

    async notRegisteredEmailAccount(){
        expect(this.notRgisteredError).toHaveText('Login was unsuccessful. Please correct the errors and try again.No customer account found');
    }

    async invalidEmailError(){
        expect(this.emptyEmailError).toHaveText("Wrong email");
    }
}