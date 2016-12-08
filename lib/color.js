var getPropTypeError = require('./getPropTypeError');

function color (props, propName, componentName) {
  var prop = props[propName];
  var isColor = (
    // hex http://networking.mydesigntool.com/viewtopic.php?tid=415&id=31
    /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/i.test(prop) ||
    // hsl(a) http://stackoverflow.com/a/19289663
    /^hsla?\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)$/i.test(prop) ||
    // rgb(a) http://stackoverflow.com/a/31245990
    /^rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)$/i.test(prop)
  );
  if (!isColor) {
    return getPropTypeError('color', propName, componentName);
  }
}

module.exports = color;
