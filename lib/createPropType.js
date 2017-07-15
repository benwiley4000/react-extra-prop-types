function getPropTypeError (type, propName, componentName) {
  return new Error(
    'Non-' + type + ' prop ' + propName + ' supplied to' +
    ' `' + componentName + '`. Validation failed.'
  );
}

function createPropType (type, validator) {
  function propType (props, propName, componentName) {
    if (!validator(props[propName])) {
      return getPropTypeError(type, propName, componentName);
    }
  }
  // Object.defineProperty(propType, 'name', { value: type });
  propType.name = type

  function optional (props, propName, componentName) {
    var prop = props[propName];
    if (prop === null || prop === void 0) {
      return;
    }
    return propType(props, propName, componentName);
  }
  optional.isRequired = propType;

  return optional;
}

module.exports = createPropType;
