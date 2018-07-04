// import Api from '../../lib/api';

import {
  ADDED_NEW_ITEM,
  REMOVED_ITEM,
  TOGGLED_ITEM,
  MARKED_ALL_AS_UNPACKED
} from '../../constants';

// export const addNewItem = value => ({
//   type: ADDED_NEW_ITEM,
//   payload: {
//     id: uniqueId(),
//     packed: false,
//     value
//   }
// });

export const addNewItem = value => {
  let item = {
    packed: false,
    value
  };

  return {
    type: ADDED_NEW_ITEM,
    payload: item
  };

  // return dispatch => {
  //   Api.add(item).then(item => {
  //     dispatch({
  //       type: ADDED_NEW_ITEM,
  //       payload: item
  //     });
  //   });
  // };
};

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
