import {router as customerDispatcher} from './customer-dispatcher';
import {router as itemDispatcher} from './item-dispatcher';
import {router as orderDispatcher} from './order-dispatcher';
import express = require('express');

export const router = express.Router();

router.use(customerDispatcher);
router.use(itemDispatcher);
router.use(orderDispatcher);
