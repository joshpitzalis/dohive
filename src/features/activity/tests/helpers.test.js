import { getSeconds, getMinutes, convertTimersToActivities } from '../helpers';
test('seconds are always 59 or lower', () => {
  let time = getSeconds(75);
  expect(time).toEqual('15');
});

test('minutes are always a whole number', () => {
  let time = getMinutes(60);
  expect(time).toEqual(1);
});

test('take all the timers and group them into objects of the same title', () => {
  let timers = [
    { id: 1, title: 'x', elapsedTime: 5 },
    { id: 2, title: 'x', elapsedTime: 15 },
    { id: 3, title: 'y', elapsedTime: 20 }
  ];
  let activities = convertTimersToActivities(timers);
  let expected = [
    { title: 'x', id: 1, elapsedTime: 20 },
    { title: 'y', id: 3, elapsedTime: 20 }
  ];
  expect(activities).toEqual(expected);
});

test.skip('mark convertTimersToActivities for possible performance gains from a refactor', () => {});

test.skip('typeset all helper functions', () => {});
