var getPropTypeError = require('./getPropTypeError');

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

module.exports = integer;
