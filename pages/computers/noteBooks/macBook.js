exports.MacbookPage= class MacbookPage{

    constructor(page){
        this.page= page;
        this.macbookAddToWishlist= page.locator('//div[@class="add-to-wishlist"]')
    }


    async clickMacbookAddToWishlist(){
        await this.macbookAddToWishlist.click();

    }
}