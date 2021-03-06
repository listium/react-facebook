'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSpinnerChildren = require('react-spinner-children');

var _reactSpinnerChildren2 = _interopRequireDefault(_reactSpinnerChildren);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var LoginButton = (_temp = _class = function (_Component) {
  _inherits(LoginButton, _Component);

  function LoginButton(props, context) {
    _classCallCheck(this, LoginButton);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.onReady = function () {
      _this.setState({ isWorking: false });
    };

    _this.onWorking = function () {
      var isWorking = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      _this.setState({ isWorking: isWorking });
    };

    _this.state = {
      isWorking: true
    };
    return _this;
  }

  LoginButton.prototype.renderLoading = function renderLoading() {
    var _props = this.props,
        spinner = _props.spinner,
        spinnerClassName = _props.spinnerClassName;


    if (!spinner || !this.state.isWorking) {
      return null;
    }

    return _react2.default.createElement(_reactSpinnerChildren2.default, { config: this.props.spinnerConfig, className: spinnerClassName });
  };

  LoginButton.prototype.render = function render() {
    var _props2 = this.props,
        children = _props2.children,
        buttonClassName = _props2.buttonClassName,
        iconClassName = _props2.iconClassName,
        icon = _props2.icon;


    return _react2.default.createElement(
      _Login2.default,
      _extends({
        onReady: this.onReady,
        onWorking: this.onWorking
      }, this.props),
      _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: buttonClassName,
          disabled: this.state.isWorking
        },
        icon ? _react2.default.createElement('i', { className: iconClassName }) : null,
        children,
        this.renderLoading()
      )
    );
  };

  return LoginButton;
}(_react.Component), _class.propTypes = _extends({}, _Login2.default.propTypes, {
  spinnerConfig: _react.PropTypes.object.isRequired,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  buttonClassName: _react.PropTypes.string,
  iconClassName: _react.PropTypes.string,
  icon: _react.PropTypes.bool,
  spinnerClassName: _react.PropTypes.string,
  spinner: _react.PropTypes.bool
}), _class.defaultProps = _extends({}, _Login2.default.defaultProps, {
  spinnerConfig: {},
  buttonClassName: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  spinner: true,
  icon: true
}), _temp);
exports.default = LoginButton;