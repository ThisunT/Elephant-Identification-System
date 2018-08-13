"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Helper component to allow attaching a ref to a
 * child element that may not accept refs (functional component).
 * It's higly inspired by https://github.com/facebook/react/issues/11401#issuecomment-340543801
 */
var RootRef =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RootRef, _React$Component);

  function RootRef() {
    (0, _classCallCheck2.default)(this, RootRef);
    return (0, _possibleConstructorReturn2.default)(this, (RootRef.__proto__ || Object.getPrototypeOf(RootRef)).apply(this, arguments));
  }

  (0, _createClass2.default)(RootRef, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.rootRef(_reactDom.default.findDOMNode(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.rootRef(null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return RootRef;
}(_react.default.Component);

RootRef.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.element.isRequired,
  rootRef: _propTypes.default.func.isRequired
} : {};
var _default = RootRef;
exports.default = _default;