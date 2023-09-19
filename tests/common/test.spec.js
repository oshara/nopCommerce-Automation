import {test, describe} from '@playwright/test'
import { createAccount } from '../createAccount'
import { login } from '../login';
import { registerValidations } from '../validationRegisterPage';


//test.describe('Accounts',()=>createAccount());
//test.describe('Login',()=>login());
test.describe('Validations in Register Page',()=>registerValidations());
