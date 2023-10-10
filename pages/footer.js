const { expect } = require("@playwright/test");
import {url} from '../environment-config'

exports.FooterSection = class FooterSection{


    constructor(page){
        this.page= page;
        this.siteMap= page.locator('//a[@href="/sitemap"]');
        this.shippingReturns= page.locator('//a[@href="/shipping-returns"]');
        this.privacyNotice= page.locator('//a[@href="/privacy-notice"]');
        this.condionsOfUse= page.locator('//a[@href="/conditions-of-use"]');
        this.aboutUs = page.locator('//a[@href="/about-us"]');
        this.contactUs = page.locator('//a[@href="/contactus"]');
    }

    async gotoSiteMapPage(){
        await this.siteMap.click();
        await expect(this.page).toHaveURL(url+"sitemap");
    }

    async gotoShippingReturnsPage(){
        await this.shippingReturns.click();
        await expect(this.page).toHaveURL(url+"shipping-returns");
    }

    async gotoPrivacyNoticePage(){
        await this.privacyNotice.click();
        await expect(this.page).toHaveURL(url+"privacy-notice");
    }

    async gotoConditionsPage(){
        await this.condionsOfUse.click();
        await expect(this.page).toHaveURL(url+"conditions-of-use");
    }

    async gotoAboutUsPage(){
        await this.aboutUs.click();
        await expect(this.page).toHaveURL(url+"about-us");
    }

    async gotoContactUsPage(){
        await this.contactUs.click();
        await expect(this.page).toHaveURL(url+"contactus");
    }
}
