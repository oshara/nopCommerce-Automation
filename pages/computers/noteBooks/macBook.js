import {expect} from '@playwright/test'
exports.MacbookPage= class MacbookPage{

    constructor(page){
        this.page= page;
        this.macbookAddToWishlist= page.locator('//div[@class="add-to-wishlist"]');
        this.successMessage = page.locator('#bar-notification p.content');
        this.wishlistLink = page.locator('//div[@id="bar-notification"]/div/p/a');
        this.termsConditionsCheckbox= page.locator('input[id="termsofservice"]');
        this.checkoutBtn = page.locator('button[name="checkout"]');

        this.mackBooktitle= page.locator('//td[@class="product"]/a');
    }


    async clickMacbookAddToWishlist(){
        await this.macbookAddToWishlist.click();
        await expect(this.successMessage).toContainText('The product has been added to your wishlist');
        await this.wishlistLink.click();
  

    }


    async verifyMacBookName(){
        expect(this.mackBooktitle).toContainText('Apple MacBook Pro 13-inch');
    }

    async clicktheTermsConditions(){
        await this.termsConditionsCheckbox.click();
    }

    async clickCheckoutBtn(){
        await this.checkoutBtn.click();
        await this.page.pause();
    }
   


}