'use strict';

function isCorrectOrder(numbers) {
  if (!Array.isArray(numbers) || numbers.length < 2) {
    return false;
  }

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i - 1] + 1) {
      return false;
    }
  }

  return true;
}

function isCorrectScheduleTimes(scheduleArray) {
  let correctSchedule = true;
  const lastItemIndex = scheduleArray.length - 1;

  if (scheduleArray.length === 1) {
    const current = scheduleArray[0];

    if (new Date(current.arrival_time) >= new Date(current.departure_time)) {
      correctSchedule = false;
    }
  } else {
    for (let i = 0; i < lastItemIndex; i++) {
      const indexNextItem = i + 1;
      const current = scheduleArray[i];
      const next = scheduleArray[indexNextItem];

      if (new Date(next.arrival_time) >= new Date(next.departure_time)) {
        correctSchedule = false;
        break;
      }

      if (new Date(next.arrival_time) <= new Date(current.departure_time)) {
        correctSchedule = false;
        break;
      }
      // if (
      //   (i !== 0 || i !== lastItemIndex) &&
      //   new Date(current.arrival_time) >= new Date(current.departure_time)
      // ) {
      //   correctSchedule = false;
      //   break;
      // }

      // if (
      //   indexNextItem !== lastItemIndex &&
      //   new Date(next.arrival_time) <= new Date(current.departure_time)
      // ) {
      //   correctSchedule = false;
      //   break;
      // }
    }
  }

  return correctSchedule;
}
module.exports = {
  isCorrectScheduleTimes,
  isCorrectOrder
};
