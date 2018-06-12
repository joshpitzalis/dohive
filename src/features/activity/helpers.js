export const calculateTime = now => {
  const minutes = Math.floor((now % 60) / (1000 * 60));
  const seconds = Math.floor((now % (1000 * 60)) / 1000);
  return seconds ? `${minutes} minute(s) and ${seconds} second(s)` : '';
};
