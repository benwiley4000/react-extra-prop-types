var getPropTypeError = require('./getPropTypeError');

function uuid (props, propName, componentName) {
  var prop = props[propName];
  // http://stackoverflow.com/a/13653180
  var isGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(prop);
  if (!isGuid) {
    return getPropTypeError('guid', propName, componentName);
  }
}

module.exports = uuid;
