# react-extra-prop-types

Includes some additional React [PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html) for common use cases.

No dependencies.

## PropTypes

* `integer` - invalid if prop is non-integer
* `color` - invalid if prop is not valid [CSS color string](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) (rgb(a), hsl(a), hex). Excludes keywords.
* `datetime` - invalid if prop is not string which can be passed to JavaScript [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) constructor with valid result
* `uuid` - invalid if prop is not valid [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)

## Usage

### `require`-ing

```javascript
var ExtraPropTypes = require('react-extra-prop-types');
var color = ExtraPropTypes.color;
var uuid = ExtraPropTypes.uuid;

// or ...
var color = require('react-extra-prop-types/lib/color');
var uuid = require('react-extra-prop-types/lib/uuid');

// or ... (ES2015+ only)
import { color, uuid } from 'react-extra-prop-types';
```

### use just like normal `PropTypes`

```javascript
MyReactComponent.propTypes = {
  id: ExtraPropTypes.integer,
  name: React.PropTypes.string,
  lastFetchTime: ExtraPropTypes.datetime
};
```
