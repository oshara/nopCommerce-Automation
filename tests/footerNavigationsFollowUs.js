import {test,expect, chromium} from '@playwright/test';
import { url } from '../environment-config';

export const socialMediaNav=() =>{
test("Navigate to Facebook page",async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto(url);
    await expect(page1).toHaveTitle("nopCommerce demo store");

    const pagePromise= context.waitForEvent('page');
    await page1.locator('//a[@href="http://www.facebook.com/nopCommerce"]').click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle("NopCommerce Facebook");

})

test("Navigating to Twitter page",async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await await context.newPage();

    await page1.goto(url);
    expect(page1).toHaveTitle("nopCommerce demo store");

    const pagePromise = context.waitForEvent('page');
    await page1.locator('//a[@href="https://twitter.com/nopCommerce"]').click();
    const newPage = await pagePromise;
    expect(newPage).toHaveTitle('nopCommerce (@nopCommerce) / X')
    await newPage.pause();


})

test.only('Navigating to the YouTube page',async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto(url);
    expect(page1).toHaveTitle('nopCommerce demo store');

    const pagePromise = context.waitForEvent('page');
    await page1.locator('//a[@href="http://www.youtube.com/user/nopCommerce"]').click();

    const newPage = await pagePromise;
    expect(newPage).toHaveURL('https://www.youtube.com/user/nopCommerce');
    await newPage.pause()
})
}