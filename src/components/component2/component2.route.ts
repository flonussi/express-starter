import { Router } from 'express';
import { Component2 } from './component2';

export const component2 = Router();

component2.route('/component2').get(Component2.getName);