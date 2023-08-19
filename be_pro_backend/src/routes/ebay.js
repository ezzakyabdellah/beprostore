import { getProducts } from '@/controllers/ebay';

import { isAuthenticated, validate } from '@/middleware';
const { Router } = require('express');

const router = Router();

router.route('/:search').get(getProducts);

export default router;
