/**
 * Formats a number into a shorter localized string
 * using the K suffix.
 *
 * Rounds numbers greater than 1000 to 1 decimal place,
 * appending a K suffix.
 * Numbers less than 1000 are returned unchanged.
 */
export const kformatter = (number) => {
  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
  return number > 1000 ? round(number / 1000, 1) + "K" : number;
};

export const utcTimeConverter = (postTime) => {
  //Date.now gives ms, postTime is in s so divide by 1000

  const elapsed = Date.now() / 1000 - postTime;
  const secondsInHour = 60 * 60;
  const secondsInDay = secondsInHour * 24;
  const secondsInMonth = secondsInDay * 30;
  const secondsInYear = secondsInMonth * 12;

  return elapsed < 60
    ? `${elapsed} seconds ago`
    : elapsed < secondsInHour
    ? `${Math.floor(elapsed / 60)} minutes ago`
    : elapsed < secondsInDay
    ? `${Math.floor(elapsed / secondsInHour)} hours ago`
    : elapsed < secondsInMonth
    ? `${Math.floor(elapsed / secondsInDay)} days ago`
    : elapsed < secondsInYear
    ? `${Math.floor(elapsed / secondsInMonth)} months ago`
    : `${Math.floor(elapsed / secondsInYear)} years ago`;
};

export const previewText = (text, wordLimit) =>
  text.length > wordLimit ? text.substring(0, wordLimit) + "  [...]" : text;
