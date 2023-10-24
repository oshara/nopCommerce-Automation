
import {test} from '@playwright/test';
import {HomePage} from '../pages/home';
import {FooterSection} from '../pages/footer';
import { url } from '../environment-config';

export const footerMyAccountNavigations= ()=> {

test('Verify user can navigates to the My Account page',async({browser})=>{

    const context = await browser.newContext({
        storageState: "./auth.json"
    })

    const page = await context.newPage();
    await page.goto(url+"wishlist");
    const FooterObj = new FooterSection(page);
    await FooterObj.gotoMyAccountFooterMenu();

   
    

})


test('Verify user can navigates to the Orders page',async({browser})=>{

    const context = await browser.newContext({
        storageState: "./auth.json"
    })

    const page = await context.newPage();
    await page.goto(url+"wishlist");
    const FooterObj = new FooterSection(page);
    await FooterObj.gotoOrdersFooterMenu();
    

})



test('Verify user can navigates to the Addresses page',async({browser})=>{

    const context = await browser.newContext({
        storageState: "./auth.json"
    })

    const page = await context.newPage();
    await page.goto(url+"wishlist");
    const FooterObj = new FooterSection(page);
    await FooterObj.gotoAddressesFooterMenu();
   
    

})



test('Verify user can navigates to the Shopping Cart page',async({browser})=>{

    const context = await browser.newContext({
        storageState: "./auth.json"
    })

    const page = await context.newPage();
    await page.goto(url+"wishlist");
    const FooterObj = new FooterSection(page);
    await FooterObj.gotoShoppingCartFooterMenu();
    
    

})

test('Verify user can navigates to the Wishlist page',async({browser})=>{

    const context = await browser.newContext({
        storageState: "./auth.json"
    })

    const page = await context.newPage();
    await page.goto(url+"wishlist");
    const FooterObj = new FooterSection(page);
    await FooterObj.gotoWishlistFooterMenu();
  
    

})

test('Verify user can navigates to the Apply for vendor account page',async({browser})=>{

    const context = await browser.newContext({
        storageState: "./auth.json"
    })

    const page = await context.newPage();
    await page.goto(url+"wishlist");
    const FooterObj = new FooterSection(page);
    await FooterObj.gotoApplyForVendorFooterMenu();
    await page.pause();
    

})

}