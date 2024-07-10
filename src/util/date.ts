import {Days} from '../types/itenaryForm';

export const getDateInNumFormat = (day: Days) => {
  const todayDate = new Date();
  let numFormatedDate;
  switch (day) {
    case Days.yesterday:
      numFormatedDate = todayDate.setDate(todayDate.getDate() - 1);
      break;
    case Days.tomorrow:
      numFormatedDate = todayDate.setDate(todayDate.getDate() + 1);
      break;

    default:
      numFormatedDate = todayDate.setDate(todayDate.getDate() + 0);
      break;
  }
  return numFormatedDate;
};

export const getFormatedDate = (dateInNumber: number) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const day = new Date(dateInNumber).getDate();
  const month = monthNames[new Date(dateInNumber).getMonth()];

  return `${day} ${month}`;
};

export const calculateTodaysProgress = (startTime, endTime) => {
  function timeStringToDate(timeString) {
    const [hours, minutes] = timeString?.split(':')?.map(Number) || [];
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }
  // Convert time strings to Date objects
  const startTimeObj = timeStringToDate(startTime);
  const endTimeObj = timeStringToDate(endTime);
  const currentTimeObj = new Date();
  //Check for 1 is current time reached
  if (currentTimeObj < startTimeObj) {
    return 0;
  } else if (currentTimeObj >= startTimeObj && currentTimeObj < endTimeObj) {
    const totalDuration = endTimeObj - startTimeObj;
    const timeElapsed = currentTimeObj - startTimeObj;
    return 1 + timeElapsed / totalDuration;
  } else {
    return 2;
  }
};
