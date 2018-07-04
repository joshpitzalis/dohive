import React from 'react';
import { render, wait } from 'react-testing-library';
import Timer from '../../../components/Timer';
import { renderWithRedux } from '../../../setupTests';
import { fireEvent } from 'react-testing-library';
test('starts the timer', async () => {
  let { getByTestId } = renderWithRedux(<Timer />);
  expect(getByTestId('timerTime')).toHaveTextContent(`0:00`);
  getByTestId('startTimer').click();
  await wait(() => expect(getByTestId('timerTime')).toHaveTextContent(`0:01`));
  getByTestId('stopTimer').click();
  expect(getByTestId('timerTime')).toHaveTextContent(`0:01`);
});

test('save a time duration when the timer stops', async () => {
  let { getByTestId, queryAllByTestId } = renderWithRedux(<Timer />);
  // start a timer
  expect(getByTestId('timerTime')).toHaveTextContent(`0:00`);
  getByTestId('startTimer').click();
  await wait(() => expect(getByTestId('timerTime')).toHaveTextContent(`0:01`));
  getByTestId('stopTimer').click();
  expect(getByTestId('timerTime')).toHaveTextContent(`0:01`);
  getByTestId('startTimer').click();
  await wait(() => expect(getByTestId('timerTime')).toHaveTextContent(`0:03`));
  getByTestId('stopTimer').click();
  expect(getByTestId('timerTime')).toHaveTextContent(`0:03`);
  // make sure there is only one timer in this test
  const timers = queryAllByTestId('timer');
  expect(timers).toHaveLength(1);
});
test('add a title to a timer', () => {
  let { getByText, getByTestId } = renderWithRedux(<Timer />);
  let inputNode = getByTestId('tagActivity');
  inputNode.value = 'testing';
  fireEvent.change(inputNode);
  getByText('testing');
});
test('edit title', () => {
  let { getByText, getByTestId } = renderWithRedux(<Timer />);
  let inputNode = getByTestId('tagActivity');
  inputNode.value = 'testing';
  fireEvent.change(inputNode);
  getByText('testing');
  inputNode.value = 'edited';
  fireEvent.change(inputNode);
  getByText('edited');
});

test.skip('delete a time', () => {});
test.skip('edit a time', () => {});
test.skip('restart a saved timer', () => {});

test.skip('timer continues to run as title is edited', () => {});
test.skip('snapshots', () => {});
test.skip('save everything to local state', () => {});
