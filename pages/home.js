const { expect } = require("@playwright/test");
const { url } = require("../environment-config");

exports.HomePage = class HomePage{

    constructor (page){
        this.page= page;
        this.registerBtn = page.locator('a.ico-register');
    }

    async gotoHomePage(){
        await this.page.goto(url);
       await expect(this.page).toHaveURL(url)
    }

    async gotoRegisterPage(){
        await this.registerBtn.click();
        await expect(this.page).toHaveURL(url+"register?returnUrl=%2F");
    }
}