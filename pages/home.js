exports.HomePage = class HomePage{

    constructor (page){
        this.page= page;
        this.registerBtn = page.locator('a.ico-register');
    }

    async gotoRegisterPage(){
        await this.registerBtn.click();
    }
}