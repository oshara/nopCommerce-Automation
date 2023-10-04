import {test} from '@playwright/test';
import { HomePage } from '../pages/home';

export const subMenuNavigations = ()=>{

test("User navigating to the Deskotp page ",async({page})=>{

        const HomeObj = new HomePage(page);

        await HomeObj.gotoHomePage();
        await HomeObj.gotoDesktopMenu();
        
})

test("User navigating to the Notebook page",async({page})=>{

        const HomeObj = new HomePage(page);

        await HomeObj.gotoHomePage();
        await HomeObj.gotoNoteBookMenu();
})

test('User navigating to the Software page',async({page})=>{

    const HomeObj = new HomePage(page);
    
    await HomeObj.gotoHomePage();
    await HomeObj.gotoSoftwareMenu();

})

test('User navigating to the Camera and Photo page',async({page})=>{
    
    const HomeObj = new HomePage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoCameraPhotoMenu();
})

test('User navigating to the Cell Phones page',async({page})=>{
    
    const HomeObj = new HomePage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoCellPhonesMenu();
})

test('User navigating to the Others page',async({page})=>{
    
    const HomeObj = new HomePage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoOthersMenu();
})

test('User navigating to the Shoes page',async({page})=>{
    
    const HomeObj = new HomePage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoShoesMenu();
})

test('User navigating to the Clothing page',async({page})=>{
    
    const HomeObj = new HomePage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoClothingMenu();
})

test('User navigating to the Accessories page',async({page})=>{
    
    const HomeObj = new HomePage(page);

    await HomeObj.gotoHomePage();
    await HomeObj.gotoAccessoriesMenu();
})






}