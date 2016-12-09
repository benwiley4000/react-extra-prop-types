var getPropTypeError = require('./getPropTypeError');
var createOptionalPropType = require('./createOptionalPropType');

function integer (props, propName, componentName) {
  var prop = props[propName];
  var isInteger = (
    typeof prop === 'number' && 
    isFinite(prop) && 
    Math.floor(prop) === prop
  );
  if (!isInteger) {
    return getPropTypeError('integer', propName, componentName);
  }
}

module.exports = createOptionalPropType(integer);
