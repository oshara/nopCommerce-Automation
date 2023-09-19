import { expect } from "@playwright/test";
exports.RegisterPage =class RegisterPage {
 
    constructor(page){
        this.page = page;
        this.gender = page.locator('input[id="gender-female"]');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.dobDate= page.locator('//select[@name="DateOfBirthDay"]');
        this.dobMonth = page.locator('//select[@name="DateOfBirthMonth"]');
        this.dobYear = page.locator('//select[@name="DateOfBirthYear"]');
        this.email = page.locator('#Email');
        this.companyName = page.locator("#Company");
        this.newsLetter = page.locator('#Newsletter');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');

        this.registerBtn = page.locator('#register-button');

        this.firstNameEmptyError = page.locator('#FirstName-error');
        this.lastNameEmptyError = page.locator('#LastName-error');
        //this.successMessageForRegister = page.locator('//div[@xpath="1"]');
        //this.successMessageForRegister = page.getByText('Your registration completed');

    }

    async selectGender(){
        await this.gender.check();
    }

    async fillFirstName(firstname){
        await this.firstName.fill(firstname);

    }

    async fillLastName(lastname){
        await this.lastName.fill(lastname);
    }

    async fillDOB(){
        await this.dobDate.selectOption('11');
        await this.dobMonth.selectOption('May');
        await this.dobYear.selectOption('1990');
    }

    async fillEmail(email){
        await this.email.fill(email);

    }

    async fillCompanyName(companyname){
        await this.companyName.fill(companyname)
    }

    async checkNewsLetter(){
        await this.newsLetter.check();
    }

    async fillPasswords(password,confirmpassword){
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmpassword)
    }

    async clickRegisterBtn(){
        await this.registerBtn.click();
    }

    async successMessage(){
     console.log(this.successMessageForRegister)
     expect(this.page.successMessageForRegister).toContain('Your registration completed');
    }

    async validationFirstNameEmpty(){
        expect(this.firstNameEmptyError).toContainText('First name is required.');

    }

    async validationLastNameEmpty (){
        expect(this.lastNameEmptyError).toContainText('Last name is required');
    }
}