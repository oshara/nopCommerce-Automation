const { email } = require("../data-config");

exports.LoginPage = class LoginPage{
    constructor(page){
        this.page= page;
        this.emailField = page.locator('input#Email');
        this.passwordField = page.locator('input#Password');
        this.loginBtn = page.locator('//button[@class="button-1 login-button"]');
    }

    async loginWithValidCredentials(email,password){
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }
}