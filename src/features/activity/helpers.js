// @param seconds number
// @returns string
export const getSeconds = seconds => `0${seconds % 60}`.slice(-2);

export const getMinutes = seconds => Math.floor(seconds / 60);

export const convertTimersToActivities = timers => {
  return timers.reduce((total, timer) => {
    // get the index of the first time in total with the same title as the current timer
    let occurs = total.findIndex(item => item.title === timer.title);

    if (occurs !== -1) {
      total[occurs].elapsedTime += timer.elapsedTime;
    } else {
      total = total.concat(timer);
    }

    return total;
  }, []);
};

const defaultTripTime = Date.now() + 1000 * 60 * 10;

export default () => {
  const distance = defaultTripTime - Date.now();
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return `in ${minutes} minute(s) and ${seconds} second(s)`;
};
