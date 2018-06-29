import { Router } from 'express';
import { component1 } from './components/component1/component1.route';
import { component2 } from './components/component2/component2.route';

export const router = Router();

router.use('', component1);
router.use('', component2);


router.route('/').get((req, res) => res.send('INDEX'));