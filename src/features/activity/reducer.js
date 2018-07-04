export default function(state = [], action) {
  if (action.type === 'CREATE_TIMER') {
    let newTimer = { id: +Date.now(), title: 'New thing' };
    return state.concat(newTimer);
  }

  if (action.type === 'SAVE_TIME') {
    let { id, title, elapsedTime } = action.payload;

    let newTime = [
      {
        id,
        title,
        elapsedTime
      }
    ];

    let newState = state.filter(item => item.id !== id);
    return newState.concat(newTime);
  }

  if (action.type === 'SAVED_TITLE') {
    let { id, title, elapsedTime } = action.payload;

    let newTime = [
      {
        id,
        elapsedTime,
        title
      }
    ];

    let newState = state.filter(item => item.id !== id);
    console.log(newState);

    return newState.concat(newTime);
  }

  return state;
}
