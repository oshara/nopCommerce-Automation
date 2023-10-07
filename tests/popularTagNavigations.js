import { test } from "@playwright/test";
import { HomePage } from "../pages/home";
import { PopularTags } from "../pages/popularTags";

export const tagNavigations = () => {

    test.beforeEach("", async ({ page }) => {
        const HomeObj = new HomePage(page);
        await HomeObj.gotoHomePage();
        await HomeObj.gotoComputersPage();

    })
    test("Navigates to the apparel tag successfully", async ({ page }) => {

        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickApparelTag();
    })

    test("Navigates to the awesome tag successfully", async ({ page }) => {

        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickAwesomeTag();

    })

    test("Navigates to the book tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickbookTag();

    })

    test("Navigates to the camera tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickCameraTag();


    })

    test("Navigates to the cell tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickCellTag();

    })

    test("Navigates to the compact tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickCompactTag();

    })

    test("Navigates to the computer tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickComputerTag();

    })

    test("Navigates to the cool tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickCoolTag();

    })

    test("Navigates to the digital tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickDigitalTag();

    })

    test("Navigates to the game tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickGameTag();

    })

    test("Navigates to the jeans tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickJeansTag();

    })

    test("Navigates to the jewelry tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickJewelryTag();

    })

    test("Navigates to the nice tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickNiceTag();

    })

    test("Navigates to the shirt tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickShirtTag();

    })

    test("Navigates to the shoes tag successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickShoesTag();


    })

    test.only("Navigates to the view alls tags successfully", async ({ page }) => {
        const PopularTagsObj = new PopularTags(page);
        await PopularTagsObj.clickAllTag();

    })

}