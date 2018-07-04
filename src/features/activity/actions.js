export const createTimer = () => ({
  type: 'CREATE_TIMER'
});

export const saveTime = (elapsedTime, id, title) => ({
  type: 'SAVE_TIME',
  payload: { elapsedTime, id, title }
});

export const saveTitle = (elapsedTime, id, title) => ({
  type: 'SAVED_TITLE',
  payload: { elapsedTime, id, title }
});
