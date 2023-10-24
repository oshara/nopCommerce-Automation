const { expect } = require("@playwright/test");
import {url} from '../environment-config'

exports.FooterSection = class FooterSection{


    constructor(page){
        this.page= page;

        // Footer -> Information Section
        this.siteMap= page.locator('//a[@href="/sitemap"]');
        this.shippingReturns= page.locator('//a[@href="/shipping-returns"]');
        this.privacyNotice= page.locator('//a[@href="/privacy-notice"]');
        this.condionsOfUse= page.locator('//a[@href="/conditions-of-use"]');
        this.aboutUs = page.locator('//a[@href="/about-us"]');
        this.contactUs = page.locator('//a[@href="/contactus"]');

        // Footer -> Customer Service Section
        this.searchMenu = page.locator('//a[@href="/search"]');
        this.newsMenu = page.locator('(//a[@href="/news"])[2]');
        this.blogMenu = page.locator('(//a[@href="/blog"])');
        this.recentlyViewedProductMenu = page.locator('(//a[@href="/recentlyviewedproducts"])');
        this.compareProductMenu = page.locator('(//a[@href="/compareproducts"])');
        this.newProduuctsMenu = page.locator('(//a[@href="/newproducts"])');

        // Footer -> My Account Section
        this.myAccountFooterMenu = page.locator('(//a[@href="/customer/info"])[2]');
        this.ordersMenu = page.locator('//a[@href="/order/history"]');
        this.addressesMenu= page.locator('//a[@href="/customer/addresses"]');
        this.cartFooterMenu = page.locator('(//a[@href="/cart"])[2]');
        this.wishlistFooterMenu = page.locator('(//a[@href="/wishlist"])[2]');
        this.applyForVendorMenu = page.locator('//a[@href="/vendor/apply"]');

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

    async gotoSearchFooterMenu(){
        await this.searchMenu.click();
        await expect(this.page).toHaveURL(url+"search");
    }

    async gotoNewsFooterMenu(){
        await this.newsMenu.click();
        await expect(this.page).toHaveURL(url+"news");
    }

    
    async gotoBlogMenu(){
        await this.blogMenu.click();
        await expect(this.page).toHaveURL(url+"blog");
    }

    
    async gotoRecentlyViewedProductFooterMenu(){
        await this.recentlyViewedProductMenu.click();
        await expect(this.page).toHaveURL(url+"recentlyviewedproducts");
    }

    async gotoCompareProductsFooterMenu(){
        await this.compareProductMenu.click();
        await expect(this.page).toHaveURL(url+"compareproducts");
    }

    async gotoNewProductsFooterMenu(){
        await this.newProduuctsMenu.click();
        await expect(this.page).toHaveURL(url+"newproducts");
    }

    async gotoMyAccountFooterMenu(){
        await this.myAccountFooterMenu.click();
        await expect(this.page).toHaveURL(url+"customer/info");
    }

    async gotoOrdersFooterMenu(){
        await this.ordersMenu.click();
        await expect(this.page).toHaveURL(url+"order/history");
    }

    async gotoAddressesFooterMenu(){
        await this.addressesMenu.click();
        await expect(this.page).toHaveURL(url+"customer/addresses");
    }

    async gotoShoppingCartFooterMenu(){
        await this.cartFooterMenu.click();
        await expect(this.page).toHaveURL(url+"cart");
    }

    async gotoWishlistFooterMenu(){
        await this.wishlistFooterMenu.click();
        await expect(this.page).toHaveURL(url+"wishlist");
    }

    async gotoApplyForVendorFooterMenu(){
        await this.applyForVendorMenu.click();
        await expect(this.page).toHaveURL(url+"vendor/apply");
    }
}
