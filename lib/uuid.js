var createPropType = require('./createPropType');
var validator = require('./validators/isUuid');

module.exports = createPropType('uuid', validator);
