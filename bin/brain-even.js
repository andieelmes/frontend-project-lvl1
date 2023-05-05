#!/usr/bin/env node

import { askName } from '../src/cli.js';
import play from '../src/brain-even.js';

console.log('Welcome to the Brain Games!');
const name = askName();
play(name);
