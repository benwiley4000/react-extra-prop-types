function isDatetime (prop) {
  return typeof prop === 'string' && !isNaN(new Date(prop).getTime());
}

module.exports = isDatetime;
