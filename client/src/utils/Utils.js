const {format: formatDate} = require('date-fns');

const getUTCDate = (dateString = Date.now()) => {
  const date = new Date(dateString);
  return new Date(date.getTime() + date.getTimezoneOffset()*60*1000)
};

export {
    getUTCDate
}