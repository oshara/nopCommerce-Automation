import {test, describe} from '@playwright/test'
import { createAccount } from '../createAccount'
import { login } from '../login';
import { registerValidations } from '../validationRegisterPage';
import { validationsLogin } from '../validationLogin';
import { mainMenuNavigation } from '../mainMenuNavigation';
import { subMenuNavigations } from '../subMenuNavigation';


//test.describe('Accounts',()=>createAccount());
// test.describe('Login',()=>login());
// test.describe('Validations in Register Page',()=>registerValidations());
//test.describe('Validations in Login Page',()=>validationsLogin());
// test.describe("Main Menus",()=>mainMenuNavigation());
test.describe('Sub Menu Navigations',()=>subMenuNavigations());
