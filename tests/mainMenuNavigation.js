import { test } from '@playwright/test';
import { HomePage } from '../pages/home';

export const mainMenuNavigation = () => {

    test("User navigating to the Computers page", async ({ page }) => {

        const HomeObj = new HomePage(page);
        await HomeObj.gotoHomePage();
        await HomeObj.gotoComputersPage();

    })

    test("User navigating to the Electronics page", async ({ page }) => {

        const HomeObj = new HomePage(page);
        await HomeObj.gotoHomePage();
        await HomeObj.gotoElectronicsPage();

    })

    test("User navigating to the Apparel page", async ({ page }) => {

        const HomeObj = new HomePage(page);
        await HomeObj.gotoHomePage();
        await HomeObj.gotoApparelPage();

    })

    test("User navigating to the Digital Downloads page", async ({ page }) => {

        const HomeObj = new HomePage(page);
        await HomeObj.gotoHomePage();
        await HomeObj.gotoDigitalDownlodsPage();

    })

    test("User navigating to the Books page", async ({ page }) => {

        const HomeObj = new HomePage(page);
        await HomeObj.gotoHomePage();
        await HomeObj.gotoBooksPage();

    })

    test("User navigating to the Jewelry page", async ({ page }) => {

        const HomeObj = new HomePage(page);
        await HomeObj.gotoHomePage();
        await HomeObj.gotoJewelryPage();

    })

    test("User navigating to the Gift Cards page", async ({ page }) => {

        const HomeObj = new HomePage(page);
        await HomeObj.gotoHomePage();
        await HomeObj.gotoGiftCardsPage();

    })

}