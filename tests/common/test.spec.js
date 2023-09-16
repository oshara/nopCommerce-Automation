import {test, describe} from '@playwright/test'
import { createAccount } from '../createAccount'


test.describe('Accounts',()=>createAccount());