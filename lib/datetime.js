var getPropTypeError = require('./getPropTypeError');
var createOptionalPropType = require('./createOptionalPropType');

function datetime (props, propName, componentName) {
  var prop = props[propName];
  var isDatetime = (
    typeof prop === 'string' &&
    !isNaN(new Date(prop).getTime())
  );
  if (!isDatetime) {
    return getPropTypeError('datetime', propName, componentName);
  }
}

module.exports = createOptionalPropType(datetime);
