exports.NoteBookPage = class NoteBookPage{

    constructor(page){
        this.page= page;
        this.viewMacbookPage= page.locator('(//div[@class="picture"])[2]');
       
    }


    async viewtMacbook(){
        await this.viewMacbookPage.click();
    }
}