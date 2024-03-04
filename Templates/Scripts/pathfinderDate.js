function pathfinderDate(fileDate) {

  const nthNumber = (number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const weekdays = ['Sunday','Moonday', 'Toilday', 'Wealday', 'Oathday', 'Fireday', 'Starday'];
  const months = ['Abadius', 'Calistril', 'Pharast', 'Gozran', 'Desnus', 'Sarenith', 'Erastus', 'Arodus', 'Rova', 'Lamashan','Neth','Kuthona'];
  
  let dateToConvert =new Date();

  if (fileDate) {
    // Date passed in the format YYYY-mm-dd
    dateToConvert = new Date(fileDate);
  }

  let year = parseInt(dateToConvert.getFullYear());
  let month = dateToConvert.getMonth();
  let day = dateToConvert.getDate();
  let weekday = dateToConvert.getDay();

  year = year + 2700;
  return weekdays[weekday] + ".  The " + day + nthNumber(day) + " day of " + months[month] + ", " + year;
}

module.exports = pathfinderDate;
