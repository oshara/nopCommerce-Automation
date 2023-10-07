const { expect } = require("@playwright/test");
const { url } = require("../environment-config");

exports.PopularTags = class PopularTags{

        constructor(page){
            this.page=page;
            this.apparelTag = page.locator('//a[@href="/apparel-2"]');
            this.awesomeTag = page.locator('//a[@href="/awesome"]');
            this.bookTag= page.locator('//a[@href="/book"]');
            this.cameraTag= page.locator('//a[@href="/camera"]');
            this.cellTag= page.locator('//a[@href="/cell"]');
            this.compactTag= page.locator('//a[@href="/compact"]');
            this.computerTag= page.locator('//a[@href="/computer"]');
            this.coolTag = page.locator('//a[@href="/cool"]');
            this.digitalTag = page.locator('//a[@href="/digital"]');
            this.gameTag = page.locator('//a[@href="/game"]');
            this.jeansTag = page.locator('//a[@href="/jeans"]');
            this.jewelryTag = page.locator('//a[@href="/jewelry-2"]');
            this.niceTag = page.locator('//a[@href="/nice"]');
            this.shirtTag = page.locator('//a[@href="/shirt"]');
            this.shoesTag = page.locator('//a[@href="/shoes-2"]');
            this.viewAllTags = page.locator('//a[@href="/producttag/all"]');
        }

        async clickApparelTag(){
            await this.apparelTag.click();
            await expect(this.page).toHaveURL(url+"apparel-2");
            
        }

        async clickAwesomeTag(){
            await this.awesomeTag.click();
           await expect(this.page).toHaveURL(url+"awesome");
        }

        async clickbookTag(){
            await this.bookTag.click();
            await expect(this.page).toHaveURL(url+"book");
        }

        async clickCameraTag(){
            await this.cameraTag.click();
            await expect(this.page).toHaveURL(url+"camera");
        }

        async clickCellTag(){
            await this.cellTag.click();
            await expect(this.page).toHaveURL(url+"cell");
        }

        async clickCompactTag(){
            await this.compactTag.click();
            await expect(this.page).toHaveURL(url+"compact");
        }

        async clickComputerTag(){
            await this.computerTag.click();
            await expect(this.page).toHaveURL(url+"computer");
        }

        async clickCoolTag(){
            await this.coolTag.click();
            await expect(this.page).toHaveURL(url+"cool");
        }

        async clickDigitalTag(){
            await this.digitalTag.click();
            await expect(this.page).toHaveURL(url+"digital");
        }

        async clickGameTag(){
            await this.gameTag.click();
            await expect(this.page).toHaveURL(url+"game");
        }

        async clickJeansTag(){
            await this.jeansTag.click();
            await expect(this.page).toHaveURL(url+"jeans");
        }

        async clickJewelryTag(){
            await this.jewelryTag.click();
            await expect(this.page).toHaveURL(url+"jewelry-2");
        }

        async clickNiceTag(){
            await this.niceTag.click();
            await expect(this.page).toHaveURL(url+"nice");
        }

        async clickShirtTag(){
            await this.shirtTag.click();
            await expect(this.page).toHaveURL(url+"shirt");
        }

        async clickShoesTag(){
            await this.shoesTag.click();
            await expect(this.page).toHaveURL(url+"shoes-2");
        }

        async clickAllTag(){
            await this.viewAllTags.click();
            await expect(this.page).toHaveURL(url+"producttag/all");
        }
}