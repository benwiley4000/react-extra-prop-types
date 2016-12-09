var createPropType = require('./createPropType');
var validator = require('./validators/isInteger');

module.exports = createPropType('integer', validator);
