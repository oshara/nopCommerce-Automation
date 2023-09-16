exports.RegisterPage =class RegisterPage {
 
    constructor(page){
        this.page = page;
        this.gender = page.locator('input[id="gender-female"]');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.dobDate= page.locator('#DateOfBirthDay');
        this.dobMonth = page.locator('#DateOfBirthMonth');
        this.dobYear = page.locator('#DateOfBirthYear');
        this.email = page.locator('#Email');
        this.companyName = page.locator("#Company");
        this.newsLetter = page.locator('#Newsletter');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');

        this.registerBtn = page.locator('#register-button');


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
        await this.dobDate.selectOption('10');
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
}