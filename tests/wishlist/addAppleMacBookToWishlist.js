import {expect, test} from "@playwright/test";
import { HomePage } from "../../pages/home";
import { ComputersPage } from "../../pages/computers/computers";
import { NoteBookPage } from "../../pages/computers/notebook";
import { MacbookPage } from "../../pages/computers/noteBooks/macBook";

export const addtoWishlist = ()=>{

test('Verify user can add the "Apple MacBook Pro 13-inch" product to the Wishlist successfully',async({page})=>{

    const HomeObj = new HomePage(page);
    const ComputersObj = new ComputersPage(page);
    const NoteBookObj = new NoteBookPage(page);
    const MacBookObj = new MacbookPage(page);
    
    await HomeObj.gotoHomePage();
    await HomeObj.gotoComputersPage();
    await ComputersObj.clickNoteBookImage();
    await NoteBookObj.viewtMacbook();
    await MacBookObj.clickMacbookAddToWishlist();
    await MacBookObj.verifyMacBookName();

  
})

}