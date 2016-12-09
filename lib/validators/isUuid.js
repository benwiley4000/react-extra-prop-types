// http://stackoverflow.com/a/13653180
function isUuid (prop) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(prop);
}

module.exports = isUuid;
