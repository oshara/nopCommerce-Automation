exports.ComputersPage = class ComputersPage{

    constructor(page){
        this.page= page;
        this.desktopImage= page.locator('//img[@alt="Picture for category Desktops"]');
        this.noteBookImage = page.locator('//img[@alt="Picture for category Notebooks"]');
        this.softwareImage = page.locator('//img[@alt="Picture for category Software"]');
     }

     async clickDesktopImage(){
        await this.desktopImage.click();
     }

     async clickNoteBookImage(){
        await this.noteBookImage.click();
     }

     async clickSoftwareImage(){
        await this.softwareImage.click();
     }


}