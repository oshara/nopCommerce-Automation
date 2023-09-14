exports.RegisterPage =class RegisterPage {
 
    constructor(page){
        this.page = page;
        this.gender = page.locator('input[id="gender-female"]');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.l
    }
}