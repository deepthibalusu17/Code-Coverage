'use strict';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

it('calls the callback after 1 second via advanceTimersByTime', () => {
  const timerGame = require('../codecoverage/timerGame.js');
  const callback = jest.fn();

  timerGame(callback);

  // At this point in time, the callback should not have been called yet
  expect(callback).not.toBeCalled();

  // Fast-forward until all timers have been executed
  jest.advanceTimersByTime(1000);

  // Now our callback should have been called!
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});


test('waits 1 second before ending the game', () => {
  const timerGame = require('../codecoverage/timerGame.js');
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(2);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});