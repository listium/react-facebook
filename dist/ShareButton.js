'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Share = require('./Share');

var _Share2 = _interopRequireDefault(_Share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ShareButton = (_temp = _class = function (_Component) {
  _inherits(ShareButton, _Component);

  function ShareButton() {
    _classCallCheck(this, ShareButton);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ShareButton.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        iconClassName = _props.iconClassName,
        icon = _props.icon,
        children = _props.children;
    var _props2 = this.props,
        width = _props2.width,
        href = _props2.href,
        height = _props2.height,
        hashtag = _props2.hashtag,
        quote = _props2.quote,
        mobileIframe = _props2.mobileIframe,
        display = _props2.display,
        appId = _props2.appId,
        redirectURI = _props2.redirectURI;


    return _react2.default.createElement(
      _Share2.default,
      {
        href: href,
        width: width,
        height: height,
        hashtag: hashtag,
        quote: quote,
        mobileIframe: mobileIframe,
        display: display,
        appId: appId,
        redirectURI: redirectURI
      },
      _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: className
        },
        icon ? _react2.default.createElement('i', { className: iconClassName }) : null,
        children
      )
    );
  };

  return ShareButton;
}(_react.Component), _class.propTypes = _extends({}, _Share2.default.propTypes, {
  className: _react.PropTypes.string,
  iconClassName: _react.PropTypes.string,
  icon: _react.PropTypes.bool

}), _class.defaultProps = _extends({}, _Share2.default.defaultProps, {
  className: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  icon: true
}), _temp);
exports.default = ShareButton;