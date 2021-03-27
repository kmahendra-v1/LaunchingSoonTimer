import React, { useCallback, useEffect, useRef, useState } from 'react';
import moment from 'moment';
import CountdownBlock from './CountdownBlock';
import { formatTimeUnit, getTimeUnitValues, shouldFlip } from '../utils';
import { FaSpinner } from 'react-icons/fa';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const isLoading = useRef(true);

  // to hold current and previous values which are needed to determine flip status
  const secondsHistory = useRef([]);
  const minutesHistory = useRef([]);
  const hoursHistory = useRef([]);
  const daysHistory = useRef([]);

  const getTimeLeft = useCallback((launchDate) => {
    const currentDate = moment().valueOf();
    const { remainingTime, days, hours, minutes, seconds } = getTimeUnitValues(
      launchDate,
      currentDate
    );
    setTimeLeft(remainingTime);

    setDaysLeft(days);
    daysHistory.current.splice(0, daysHistory.current.length - 1);
    daysHistory.current.push(days);

    setHoursLeft(hours);
    hoursHistory.current.splice(0, hoursHistory.current.length - 1);
    hoursHistory.current.push(hours);

    setMinutesLeft(minutes);
    minutesHistory.current.splice(0, minutesHistory.current.length - 1);
    minutesHistory.current.push(minutes);

    setSecondsLeft(seconds);
    secondsHistory.current.splice(0, secondsHistory.current.length - 1);
    secondsHistory.current.push(seconds);

    if (isLoading.current) {
      isLoading.current = false;
    }
  }, []);

  const isFirstRender = useRef(true);
  const intervalId = useRef();
  const launchDate = useRef();

  // launch timer
  useEffect(() => {
    if (isFirstRender.current) {
      launchDate.current = moment()
        .add(8, 'days')
        .add(23, 'hours')
        .add(56, 'minutes')
        .valueOf();
    }
    const interval = setInterval(() => getTimeLeft(launchDate.current), 1000);
    intervalId.current = interval;

    return () => clearInterval(intervalId.current);
  }, [getTimeLeft]);

  // clear interval
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else if (timeLeft === 0 && !isFirstRender.current) {
      clearInterval(intervalId.current);
    }
  }, [timeLeft]);

  return (
    <>
      {isLoading.current ? (
        <FaSpinner color="white" size="2em" className="spinner" />
      ) : (
        <>
          <CountdownBlock
            timeUnit="days"
            value={formatTimeUnit(daysLeft)}
            flip={shouldFlip(daysHistory.current, daysLeft, timeLeft)}
          />
          <CountdownBlock
            timeUnit="hours"
            value={formatTimeUnit(hoursLeft)}
            flip={shouldFlip(hoursHistory.current, hoursLeft, timeLeft)}
          />
          <CountdownBlock
            timeUnit="minutes"
            value={formatTimeUnit(minutesLeft)}
            flip={shouldFlip(minutesHistory.current, minutesLeft, timeLeft)}
          />
          <CountdownBlock
            timeUnit="seconds"
            value={formatTimeUnit(secondsLeft)}
            flip={shouldFlip(secondsHistory.current, secondsLeft, timeLeft)}
          />
        </>
      )}
    </>
  );
};

export default Countdown;
