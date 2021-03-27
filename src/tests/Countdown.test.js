import { getTimeUnitValues, shouldFlip } from '../utils';
import moment from 'moment';

describe('Countdown Tests', () => {
  test('Get time unit values', () => {
    const fakeCurrentDate = moment(
      '03-27-2021 13:10:00',
      'MM-DD-YYYY hh:mm:ss'
    );
    const fakeLaunchDate = moment('03-28-2021 14:11:10', 'MM-DD-YYYY hh:mm:ss');

    const expected = {
      remainingTime: 90070,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 10,
    };
    const actual = getTimeUnitValues(fakeLaunchDate, fakeCurrentDate);

    expect(actual).toStrictEqual(expected);
  });

  test('Time unit block should flip', () => {
    const fakeHistory = [58, 59];
    const fakeCurrentValue = fakeHistory[1];
    const fakeTimeLeft = 150;

    const expected = true;
    const actual = shouldFlip(fakeHistory, fakeCurrentValue, fakeTimeLeft);

    expect(actual).toStrictEqual(expected);
  });
});
