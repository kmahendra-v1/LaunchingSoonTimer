export const getTimeUnitValues = (launchDate, currentDate) => {
  const remainingTime = Math.floor((launchDate - currentDate) / 1000);
  const timeLeftExcludingDays = remainingTime % 86400;
  const minutesLeftForDay = timeLeftExcludingDays % 3600;

  const days = Math.floor(remainingTime / 86400);
  const hours = Math.floor(timeLeftExcludingDays / 3600);
  const minutes = Math.floor(minutesLeftForDay / 60);
  const seconds = Math.ceil(timeLeftExcludingDays % 60);

  return { remainingTime, days, hours, minutes, seconds };
};

export const shouldFlip = (timeUnitHistory, currentTimeValue, timeLeft) =>
  timeUnitHistory.length > 1 &&
  timeUnitHistory[timeUnitHistory.length - 2] !== currentTimeValue &&
  timeLeft > 0;

export const formatTimeUnit = (timeUnit) =>
  timeUnit < 10 ? `0${String(timeUnit)}` : timeUnit;
