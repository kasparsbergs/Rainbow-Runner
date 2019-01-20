import './render/colors.js';
import Menu from './ui/Menu.js';
import LevelHelper from './levels/LevelHelper.js';
import globals from './globals.js';
import { preventDefaultEvents } from './func/funcs.js';

preventDefaultEvents();

// helpers
globals.helpers = {};
globals.helpers.levelHelper = new LevelHelper();

// menu
globals.menu = (new Menu())
  .setContent(Menu.getContentByType('menu'))
  .show()
  .listenForEvents();
