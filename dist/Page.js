'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Parser2 = require('./Parser');

var _Parser3 = _interopRequireDefault(_Parser2);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Page = (_temp = _class = function (_Parser) {
  _inherits(Page, _Parser);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _Parser.apply(this, arguments));
  }

  Page.prototype.renderComponent = function renderComponent() {
    var _props = this.props,
        style = _props.style,
        _props$href = _props.href,
        href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href,
        tabs = _props.tabs,
        hideCover = _props.hideCover,
        width = _props.width,
        height = _props.height,
        showFacepile = _props.showFacepile,
        hideCTA = _props.hideCTA,
        smallHeader = _props.smallHeader,
        adaptContainerWidth = _props.adaptContainerWidth,
        children = _props.children;


    var appID = this.context.facebook && this.context.facebook.props.appID;

    return _react2.default.createElement(
      'div',
      {
        className: 'fb-page',
        style: style,
        'data-appID': appID,
        'data-tabs': tabs,
        'data-hide-cover': hideCover,
        'data-show-facepile': showFacepile,
        'data-hide-cta': hideCTA,
        'data-href': href,
        'data-small-header': smallHeader,
        'data-adapt-container-width': adaptContainerWidth,
        'data-height': height,
        'data-width': width
      },
      children
    );
  };

  return Page;
}(_Parser3.default), _class.propTypes = _extends({}, _Parser3.default.propTypes, {
  href: _react.PropTypes.string.isRequired,
  tabs: _react.PropTypes.string,
  hideCover: _react.PropTypes.bool,
  height: _react.PropTypes.oneOfType([_react.PropTypes.number.isRequired, _react.PropTypes.string.isRequired]),
  width: _react.PropTypes.oneOfType([_react.PropTypes.number.isRequired, _react.PropTypes.string.isRequired]),
  showFacepile: _react.PropTypes.bool,
  hideCTA: _react.PropTypes.bool,
  smallHeader: _react.PropTypes.bool,
  adaptContainerWidth: _react.PropTypes.bool,
  children: _react.PropTypes.node
}), _class.defaultProps = {
  width: 340,
  height: 500,
  tabs: 'timeline',
  hideCover: false,
  showFacepile: true,
  hideCTA: false,
  smallHeader: false,
  adaptContainerWidth: true
}, _temp);
exports.default = Page;