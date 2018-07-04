import React from 'react';
import Activity from '../../../pages/Activity';
import { renderWithRedux } from '../../../setupTests';
import { fireEvent } from 'react-testing-library';

test('create a new timer', async () => {
  let { getByTestId, queryAllByTestId } = renderWithRedux(<Activity />);
  expect(queryAllByTestId('timer')).toHaveLength(0);
  getByTestId('createTimer').click();
  getByTestId('stopTimer').click();
  expect(queryAllByTestId('timer')).toHaveLength(1);
});

test('add a description to a running timer', async () => {
  let { getByTestId, queryByTestId, getByText } = renderWithRedux(<Activity />);
  expect(queryByTestId('tagActivity')).toBeNull();
  getByTestId('createTimer').click();
  let inputNode = getByTestId('tagActivity');
  inputNode.value = 'testing';
  fireEvent.change(inputNode);
  getByText('testing');
});

test.skip('delete timer', () => {});
