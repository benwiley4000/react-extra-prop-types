var getPropTypeError = require('./getPropTypeError');
var createOptionalPropType = require('./createOptionalPropType');

function uuid (props, propName, componentName) {
  var prop = props[propName];
  // http://stackoverflow.com/a/13653180
  var isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(prop);
  if (!isUuid) {
    return getPropTypeError('uuid', propName, componentName);
  }
}

module.exports = createOptionalPropType(uuid);
