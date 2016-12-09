var createPropType = require('./createPropType');
var validator = require('./validators/isColor');

module.exports = createPropType('color', validator);
