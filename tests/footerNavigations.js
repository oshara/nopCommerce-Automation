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
    await page.pause()
})

test('Verify user can navigates to the Shipping & returns page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoShippingReturnsPage()
    await page.pause()
})

test('Verify user can navigates to the Privacy notice page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoPrivacyNoticePage();
    await page.pause()
})


test('Verify user can navigates to the Conditions of use page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoConditionsPage();
    await page.pause()
})

test('Verify user can navigates to the About Us page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoAboutUsPage();
    await page.pause()
})

test('Verify user can navigates to the Contact Us page',async({page})=>{

    const FooterObj = new FooterSection(page);
    await FooterObj.gotoContactUsPage();
    await page.pause()

})







}