import {test, describe} from '@playwright/test'
import { createAccount } from '../createAccount'
import { login } from '../login';


//test.describe('Accounts',()=>createAccount());
test.describe('Login',()=>login());