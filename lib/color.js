var getPropTypeError = require('./getPropTypeError');
var createOptionalPropType = require('./createOptionalPropType');

function color (props, propName, componentName) {
  var prop = props[propName];
  // http://stackoverflow.com/a/32685393
  var isColor = (
    // hex
    /^#(?:[A-Fa-f0-9]{3}){1,2}$/i.test(prop) ||
    // rgb
    /^rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}[)]$/i.test(prop) ||
    // rgba
    /^^rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/i.test(prop) ||
    // hsl
    /^hsl[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*[)]$/i.test(prop) ||
    // hsla
    /^hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/i.test(prop)
  );
  if (!isColor) {
    return getPropTypeError('color', propName, componentName);
  }
}

module.exports = createOptionalPropType(color);
