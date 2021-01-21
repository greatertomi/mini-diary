const moment = require('moment');

exports.getCurrentDateTime = () => {
  return String(moment().format('YYYY-MM-DD HH:mm:ss'));
};
