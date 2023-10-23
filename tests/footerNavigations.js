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

test.only('Verify user can navigates to the Search page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoSearchFooterMenu();
    await page.pause()

})

test.only('Verify user can navigates to the News page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoNewsFooterMenu();
    await page.pause()

})

test.only('Verify user can navigates to the Blog page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoBlogMenu();
    await page.pause()

})

test.only('Verify user can navigates to the Recently Viewed Products page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoRecentlyViewedProductFooterMenu();
    await page.pause()

})


test.only('Verify user can navigates to the Compare Products list page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoCompareProductsFooterMenu();
    await page.pause()

})


test.only('Verify user can navigates to the New Products page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoNewProductsFooterMenu();
    await page.pause()

})

}


