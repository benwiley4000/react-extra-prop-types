function createOptionalPropType (propType) {
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

module.exports = createOptionalPropType;
