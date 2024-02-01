exports.NoteBookPage = class NoteBookPage{

    constructor(page){
        this.page= page;
        this.viewMacbookPage= page.locator('(//div[@class="picture"])[1]');
       
    }


    async viewtMacbook(){
        await this.viewMacbookPage.click();
    }
}