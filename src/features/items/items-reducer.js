import {
  ADDED_NEW_ITEM,
  REMOVED_ITEM,
  TOGGLED_ITEM,
  MARKED_ALL_AS_UNPACKED
} from '../../constants';

export default function(state = {}, action) {
  if (action.type === ADDED_NEW_ITEM) {
    const item = action.payload;
    return [item, ...state];
  }

  if (action.type === REMOVED_ITEM) {
    return state.filter(item => item.id !== action.payload);
  }

  if (action.type === TOGGLED_ITEM) {
    return state.map(item => {
      if (item.id === action.payload) return { ...item, packed: !item.packed };
      return item;
    });
  }

  if (action.type === MARKED_ALL_AS_UNPACKED) {
    return state.map(item => {
      return { ...item, packed: false };
    });
  }

  return state;
}
