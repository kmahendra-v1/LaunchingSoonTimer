import React from 'react';

const CountdownBlock = ({ timeUnit, value, flip }) => {
  return (
    <>
      <div className="countdown-container">
        <div className="time-unit-card" timevalue={value}>
          <div className={'time-unit-card-inner ' + (flip ? 'flip' : '')}>
            <div className="time-unit-card-part time-unit-card-front">
              {value}
            </div>
            <div className="time-unit-card-part time-unit-card-back">
              {value}
            </div>
          </div>
        </div>
        <p className="time-unit-title">{timeUnit}</p>
      </div>
    </>
  );
};

export default CountdownBlock;
