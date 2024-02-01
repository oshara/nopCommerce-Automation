import {test} from '@playwright/test';
import {HomePage} from '../pages/home';
import {FooterSection} from '../pages/footer';

export const footerNavigations = ()=>{

test.beforeEach('',async({page})=>{
    const HomeObj = new HomePage(page);
    await HomeObj.gotoHomePage();
})
test('Verify user can navigates to the Sitemap page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoSiteMapPage();
    
})

test('Verify user can navigates to the Shipping & returns page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoShippingReturnsPage()
   
})

test('Verify user can navigates to the Privacy notice page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoPrivacyNoticePage();
   
})


test('Verify user can navigates to the Conditions of use page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoConditionsPage();

})

test('Verify user can navigates to the About Us page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoAboutUsPage();
   
})

test('Verify user can navigates to the Contact Us page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoContactUsPage();
   

})

test('Verify user can navigates to the Search page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoSearchFooterMenu();


})

test('Verify user can navigates to the News page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoNewsFooterMenu();


})

test('Verify user can navigates to the Blog page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoBlogMenu();


})

test('Verify user can navigates to the Recently Viewed Products page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoRecentlyViewedProductFooterMenu();
    

})


test('Verify user can navigates to the Compare Products list page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoCompareProductsFooterMenu();
    

})


test('Verify user can navigates to the New Products page',async({page})=>{
    
    const FooterObj = new FooterSection(page);
    await FooterObj.gotoNewProductsFooterMenu();
    

})


test.only('Verify user can navigates to the nop-Commerce Facebook page',async({page})=>{
    
    const FooterObj = new FooterSection(page);
    await FooterObj.gotoFacebookPage();
    await page.pause();
    

})

test.only('Verify user can navigates to the nop-Commerce Twitter page',async({page})=>{
    
    const FooterObj = new FooterSection(page);
    await FooterObj.gotoTwitterPage();
    await page.pause();

})


test.only('Verify user can navigates to the nop-Commerce YouTube page',async({page})=>{
    
    const FooterObj = new FooterSection(page);
    await FooterObj.gotoYouTubePage();
    await page.pause();

})




}


