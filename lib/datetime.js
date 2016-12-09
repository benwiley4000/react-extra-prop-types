var createPropType = require('./createPropType');
var validator = require('./validators/isDatetime');

module.exports = createPropType('datetime', validator);
