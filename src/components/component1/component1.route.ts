import { Router } from 'express';
import { Component1 } from './component1';

export const component1 = Router();

component1.route('/component1').get(Component1.getName);