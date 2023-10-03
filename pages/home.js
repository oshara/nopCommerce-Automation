const { expect } = require("@playwright/test");
const { url } = require("../environment-config");

exports.HomePage = class HomePage{

    constructor (page){
        this.page= page;
        this.registerBtn = page.locator('a.ico-register');
        this.loginBtn = page.locator('a.ico-login');

        this.computersMenu = page.locator('(//a[@href="/computers"])[1]');
        this.electronicMenu = page.locator('(//a[@href="/electronics"])[1]');
        this.apparelMenu = page.locator('(//a[@href="/apparel"])[1]');
        this.digitalDownloadsMenu = page.locator('(//a[@href="/digital-downloads"])[1]');
        this.booksMenu= page.locator('(//a[@href="/books"])[1]');
        this.jewelryMenu = page.locator('(//a[@href="/jewelry"])[1]');
        this.giftCardMenu = page.locator('(//a[@href="/gift-cards"])[1]');
    }

    async gotoHomePage(){
        await this.page.goto(url);
       await expect(this.page).toHaveURL(url)
    }

    async gotoRegisterPage(){
        await this.registerBtn.click();
        await expect(this.page).toHaveURL(url+"register?returnUrl=%2F");
    }

    async gotoLoginPage(){
        await this.loginBtn.click();
        await expect(this.page).toHaveURL(url+'login?returnUrl=%2F')
    }

    async gotoComputersPage(){
        await this.computersMenu.click();
        await expect(this.page).toHaveURL(url+"computers");
    }

    async gotoElectronicsPage(){
        await this.electronicMenu.click();
        await expect(this.page).toHaveURL(url+"electronics");
    }

    async gotoApparelPage(){
        await this.apparelMenu.click();
        await expect(this.page).toHaveURL(url+"apparel");

    }

    async gotoDigitalDownlodsPage(){
        await this.digitalDownloadsMenu.click();
        await expect(this.page).toHaveURL(url+"digital-downloads");
    }

    async gotoBooksPage(){
        await this.booksMenu.click();
        await expect(this.page).toHaveURL(url+"books");
    }

    async gotoJewelryPage(){
        await this.jewelryMenu.click();
        await expect(this.page).toHaveURL(url+'jewelry');
    }

    async gotoGiftCardsPage(){
        await this.giftCardMenu.click();
        await expect(this.page).toHaveURL(url+"gift-cards")
    }

    
}
