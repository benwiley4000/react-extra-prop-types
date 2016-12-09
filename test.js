var test = require('tape');
var uuidV4 = require('uuid/v4');

var integer = require('./lib/integer');
var color = require('./lib/color');
var datetime = require('./lib/datetime');
var uuid = require('./lib/uuid');

test('propTypes ignored if props undefined', function (t) {
  t.plan(4);

  var props = {};

  t.error(integer(props, 'prop', 'SomeComponent'), 'integer: ignored');
  t.error(color(props, 'prop', 'SomeComponent'), 'color: ignored');
  t.error(datetime(props, 'prop', 'SomeComponent'), 'datetime: ignored');
  t.error(uuid(props, 'prop', 'SomeComponent'), 'uuid: ignored');
});

test('propTypes ignored if props null', function (t) {
  t.plan(4);

  var props = {
    int: null,
    color: null,
    date: null,
    uuid: null
  };

  t.error(integer(props, 'int', 'SomeComponent'), 'integer: ignored');
  t.error(color(props, 'color', 'SomeComponent'), 'color: ignored');
  t.error(datetime(props, 'date', 'SomeComponent'), 'datetime: ignored');
  t.error(uuid(props, 'uuid', 'SomeComponent'), 'uuid: ignored');
});

test('null or undefined propTypes error when .isRequired used', function (t) {
  t.plan(8);

  var props = {};

  t.ok(integer.isRequired(props, 'prop', 'SomeComponent'), 'integer: errors');
  t.ok(color.isRequired(props, 'prop', 'SomeComponent'), 'color: errors');
  t.ok(datetime.isRequired(props, 'prop', 'SomeComponent'), 'datetime: errors');
  t.ok(uuid.isRequired(props, 'prop', 'SomeComponent'), 'uuid: errors');

  var props2 = {
    int: null,
    color: null,
    date: null,
    uuid: null
  };

  t.ok(integer.isRequired(props2, 'int', 'SomeComponent'), 'integer: errors');
  t.ok(color.isRequired(props2, 'color', 'SomeComponent'), 'color: errors');
  t.ok(datetime.isRequired(props2, 'date', 'SomeComponent'), 'datetime: errors');
  t.ok(uuid.isRequired(props2, 'uuid', 'SomeComponent'), 'uuid: errors');
});

test('random integers pass integer PropType', function (t) {
  t.plan(30);

  for (var i = 0; i < 30; i++) {
    var random = Math.floor(Math.random() * 1000000 - 500000);
    t.error(integer({ int: random }, 'int', 'SomeComponent'), 'passes');
  }
});

test('random non-integers fail integer PropType', function (t) {
  t.plan(30);

  for (var i = 0; i < 30; i++) {
    var random = Math.random() * 1000000 - 500000;
    if (random % 1 === 0) {
      // try again -- we want to test non-integers.
      i--;
      continue;
    }
    t.ok(integer({ int: random }, 'int', 'SomeComponent'), 'fails');
  }
});

test('various valid css color strings pass color PropType', function (t) {
  t.plan(8);

  t.error(color({ c: 'rgba(0,0, 0, 0.1)' }, 'c', 'SomeComponent'), 'passes');
  t.error(color({ c: 'RGB(25, 255, 8)' }, 'c', 'SomeComponent'), 'passes');
  t.error(color({ c: 'hsl(180, 100%, 50%)' }, 'c', 'SomeComponent'), 'passes');
  t.error(color({ c: 'HSLA(40, 20%, 2%, 1)' }, 'c', 'SomeComponent'), 'passes');
  t.error(color({ c: '#ffffcc' }, 'c', 'SomeComponent'), 'passes');
  t.error(color({ c: '#333' }, 'c', 'SomeComponent'), 'passes');
  t.error(color({ c: '#eeaacc' }, 'c', 'SomeComponent'), 'passes');
  t.error(color({ c: 'rgba(255, 0, 0, 0.5)' }, 'c', 'SomeComponent'), 'passes');
});

test('invalid css color strings fail color PropType', function (t) {
  t.plan(8);

  t.ok(color({ c: 'rgba(-1,0, 0, 0.1)' }, 'c', 'SomeComponent'), 'fails');
  t.ok(color({ c: 'rgb(255)' }, 'c', 'SomeComponent'), 'fails');
  t.ok(color({ c: 'hsl(180, 100, 50)' }, 'c', 'SomeComponent'), 'fails');
  t.ok(color({ c: 'hsla(40, 20%, 2%)' }, 'c', 'SomeComponent'), 'fails');
  t.ok(color({ c: '#ffff' }, 'c', 'SomeComponent'), 'fails');
  t.ok(color({ c: 'rgb(400, 0, 0)' }, 'c', 'SomeComponent'), 'fails');
  t.ok(color({ c: '#jjeexx' }, 'c', 'SomeComponent'), 'fails');
  t.ok(color({ c: 'hsl(10, 150%, 50%)' }, 'c', 'SomeComponent'), 'fails');
});

test('valid JavaScript date/time strings pass datetime PropType', function (t) {
  t.plan(7);

  t.error(datetime({ d: 'March 1' }, 'd', 'SomeComponent'), 'passes');
  t.error(datetime({ d: '11 june 1998' }, 'd', 'SomeComponent'), 'passes');
  t.error(datetime({ d: 'JULY 2000' }, 'd', 'SomeComponent'), 'passes');
  t.error(datetime({ d: 'april 6 1979' }, 'd', 'SomeComponent'), 'passes');
  t.error(datetime({ d: '1 January 5:13:54' }, 'd', 'SomeComponent'), 'passes');
  t.error(datetime({ d: '10-15 5:44:55' }, 'd', 'SomeComponent'), 'passes');
  t.error(datetime({ d: '145345' }, 'd', 'SomeComponent'), 'passes');
});

test('bad JavaScript date/time strings fail datetime PropType', function (t) {
  t.plan(7);

  t.ok(datetime({ d: 'March 400000' }, 'd', 'SomeComponent'), 'fails');
  t.ok(datetime({ d: 'june' }, 'd', 'SomeComponent'), 'fails');
  t.ok(datetime({ d: '4:15' }, 'd', 'SomeComponent'), 'fails');
  t.ok(datetime({ d: 'tomorrow' }, 'd', 'SomeComponent'), 'fails');
  t.ok(datetime({ d: '1 January 5:13:54PM' }, 'd', 'SomeComponent'), 'fails');
  t.ok(datetime({ d: '10AM' }, 'd', 'SomeComponent'), 'fails');
  t.ok(datetime({ d: '10000000000000000' }, 'd', 'SomeComponent'), 'fails');
});

test('random uuids pass uuid PropType', function (t) {
  t.plan(30);

  for (var i = 0; i < 30; i++) {
    var random = uuidV4();
    t.error(uuid({ uuid: random }, 'uuid', 'SomeComponent'), 'passes');
  }
});

test('non-uuids fail uuid PropType', function (t) {
  t.plan(30);

  for (var i = 0; i < 30; i++) {
    var random = Math.random() * 1000000 - 500000;
    t.ok(uuid({ uuid: random }, 'uuid', 'SomeComponent'), 'fails');
  }
});
