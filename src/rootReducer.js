import { combineReducers } from 'redux';

import items from './features/items/items-reducer';
import timers from './features/activity/reducer';

export default combineReducers({
  items,
  timers
});
