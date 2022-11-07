module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  format_date: (date) => {
    let newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + 5);
    // return newDate.toLocaleString('en-us');
    return `${newDate.getMonth()+1}/${newDate.getDate()}/${newDate.getFullYear()}`
  }
};
