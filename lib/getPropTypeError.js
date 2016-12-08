function getPropTypeError (type, propName, componentName) {
  return new Error(
    'Non-' + type + ' prop ' + propName + ' supplied to' +
    ' `' + componentName + '`. Validation failed.'
  );
}

module.exports = getPropTypeError;
