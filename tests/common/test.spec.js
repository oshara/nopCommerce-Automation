import {test, describe} from '@playwright/test'
import { createAccount } from '../createAccount'
import { login } from '../login';
import { registerValidations } from '../validationRegisterPage';
import { validationsLogin } from '../validationLogin';
import { mainMenuNavigation } from '../mainMenuNavigation';
import { subMenuNavigations } from '../subMenuNavigation';
import {  tagNavigations } from '../popularTagNavigations';
import { addtoWishlist } from '../wishlist/addAppleMacBookToWishlist';
import { footerNavigations } from '../footerNavigations';
import { footerMyAccountNavigations } from '../footerNavigationsMyAccountSection';
import { socialMediaNav } from '../footerNavigationsFollowUs';


//test.describe('Accounts',()=>createAccount());
 //test.describe('Login',()=>login());
// test.describe('Validations in Register Page',()=>registerValidations());
//test.describe('Validations in Login Page',()=>validationsLogin());
// test.describe("Main Menus",()=>mainMenuNavigation());
// test.describe('Sub Menu Navigations',()=>subMenuNavigations());
//test.describe("Popular Tags",()=>tagNavigations());
//test.describe('Add Macbook to Wishlist',()=>addtoWishlist());
//test.describe('Footer Navigations',()=>footerNavigations());
//test.describe('My Account Section Footer Navigations',()=>footerMyAccountNavigations());
test.describe("Social Media links Navigations",()=>socialMediaNav());