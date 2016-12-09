// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#Polyfill
function isInteger (prop) {
  return (
    typeof prop === 'number' && 
    isFinite(prop) && 
    Math.floor(prop) === prop
  );
}

module.exports = isInteger;
