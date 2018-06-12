import uniqueId from 'lodash/uniqueId';

import {
  ADDED_NEW_ITEM,
  REMOVED_ITEM,
  TOGGLED_ITEM,
  MARKED_ALL_AS_UNPACKED
} from '../../constants';

export const addNewItem = value => ({
  type: ADDED_NEW_ITEM,
  payload: {
    id: uniqueId(),
    packed: false,
    value
  }
});

export const toggleItem = id => ({
  type: TOGGLED_ITEM,
  payload: id
});

export const removeItem = id => ({
  type: REMOVED_ITEM,
  payload: id
});

export const markAllAsUnpacked = () => ({
  type: MARKED_ALL_AS_UNPACKED
});
