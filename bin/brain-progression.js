#!/usr/bin/env node

import { askName } from '../src/cli.js';
import printWelcome from '../src/helpers/print-welcome.js';
import play from '../src/games/brain-progression.js';

printWelcome();
play(askName());
