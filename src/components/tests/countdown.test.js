'use strict';

import React from 'react';
import { render, cleanup, wait } from 'react-testing-library';
import Timer from '../Timer';
import { getAllByTestId } from 'dom-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

test('starts the timer', async () => {
  let { getByTestId } = render(<Timer />);
  expect(getByTestId('timerTime')).toHaveTextContent(`0:00`);
  getByTestId('startTimer').click();
  await wait(() => expect(getByTestId('timerTime')).toHaveTextContent(`0:01`));
  getByTestId('stopTimer').click();
  expect(getByTestId('timerTime')).toHaveTextContent(`0:01`);
});
