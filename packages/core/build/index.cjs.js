'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PrismicRichText = require('prismic-richtext');
var PrismicRichText__default = _interopDefault(PrismicRichText);
var prismicHelpers = require('prismic-helpers');
var propTypes = require('prop-types');
var paygreenUi = require('@paygreen/paygreen-ui');

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var serialize = function serialize() {
  var removeP = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var colorType = arguments.length > 1 ? arguments[1] : undefined;
  var colorTheme = arguments.length > 2 ? arguments[2] : undefined;
  var linkResolver = arguments.length > 3 ? arguments[3] : undefined;
  var type = arguments.length > 4 ? arguments[4] : undefined;
  var element = arguments.length > 5 ? arguments[5] : undefined;
  var content = arguments.length > 6 ? arguments[6] : undefined;
  var children = arguments.length > 7 ? arguments[7] : undefined;
  var index = arguments.length > 8 ? arguments[8] : undefined;

  if (children.length === 1 && children[0] === null) {
    return null;
  }

  switch (type) {
    case PrismicRichText.Elements.heading1:
      return /*#__PURE__*/React__default.createElement(paygreenUi.Title, {
        key: index,
        htmlTag: "h1",
        textSize: "xl",
        hasUnderline: true,
        colorTheme: colorTheme,
        colorType: colorType,
        marginTop: "sm",
        marginBottom: "sm"
      }, children);

    case PrismicRichText.Elements.heading2:
      return /*#__PURE__*/React__default.createElement(paygreenUi.Title, {
        key: index,
        htmlTag: "h2",
        textSize: "lg",
        hasUnderline: true,
        colorTheme: colorTheme,
        colorType: colorType,
        marginTop: "sm",
        marginBottom: "sm"
      }, children);

    case PrismicRichText.Elements.heading3:
      return /*#__PURE__*/React__default.createElement(paygreenUi.Title, {
        key: index,
        htmlTag: "h3",
        textSize: "md",
        colorType: colorType,
        colorTheme: colorTheme,
        colorWab: "grey60",
        marginTop: "sm",
        marginBottom: "sm"
      }, children);

    case PrismicRichText.Elements.heading4:
      return /*#__PURE__*/React__default.createElement(paygreenUi.Title, {
        key: index,
        htmlTag: "h4",
        textSize: "base",
        colorPallet: "theme",
        colorType: colorType,
        colorTheme: colorTheme
      }, children);

    case PrismicRichText.Elements.heading5:
      return /*#__PURE__*/React__default.createElement(paygreenUi.Title, {
        key: index,
        htmlTag: "h5",
        textSize: "sm",
        colorTheme: colorTheme,
        colorType: colorType
      }, children);

    case PrismicRichText.Elements.heading6:
      return /*#__PURE__*/React__default.createElement(paygreenUi.Title, {
        key: index,
        htmlTag: "h6",
        textSize: "xs",
        colorType: colorType,
        colorTheme: colorTheme
      }, children);

    case 'PaygreenTitle':
      return /*#__PURE__*/React__default.createElement(React.Fragment, {
        key: index
      }, children);

    case PrismicRichText.Elements.paragraph:
      return serializeStandardTag(removeP ? 'span' : 'p', element, children, index);

    case PrismicRichText.Elements.preformatted:
      return serializeStandardTag('pre', element, children, index);

    case PrismicRichText.Elements.strong:
      return serializeStandardTag('strong', element, children, index);

    case PrismicRichText.Elements.em:
      return serializeStandardTag('em', element, children, index);

    case PrismicRichText.Elements.listItem:
      return /*#__PURE__*/React__default.createElement(paygreenUi.ListItem, {
        key: index,
        colorTheme: colorTheme
      }, /*#__PURE__*/React__default.createElement(paygreenUi.Text, {
        colorTheme: colorTheme
      }, children));

    case PrismicRichText.Elements.oListItem:
      return /*#__PURE__*/React__default.createElement(paygreenUi.ListItem, {
        key: index,
        colorTheme: colorTheme,
        bulletStyle: "number"
      }, /*#__PURE__*/React__default.createElement(paygreenUi.Text, {
        colorTheme: colorTheme
      }, children));

    case PrismicRichText.Elements.list:
      return /*#__PURE__*/React__default.createElement(paygreenUi.List, {
        key: index,
        colorTheme: colorTheme
      }, children);

    case PrismicRichText.Elements.oList:
      return /*#__PURE__*/React__default.createElement(paygreenUi.List, {
        key: index,
        listStyle: "number",
        colorTheme: colorTheme
      }, children);

    case PrismicRichText.Elements.image:
      return serializeImage(linkResolver, element, index);

    case PrismicRichText.Elements.embed:
      return serializeEmbed(element, index);

    case PrismicRichText.Elements.hyperlink:
      return serializeHyperlink(linkResolver, element, children, index, colorTheme, colorType);

    case PrismicRichText.Elements.label:
      return serializeLabel(element, children, index);

    case PrismicRichText.Elements.span:
      return serializeSpan(content);

    default:
      return null;
  }
};

var propsWithUniqueKey = function propsWithUniqueKey() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 ? arguments[1] : undefined;
  return Object.assign(props, {
    key: key
  });
};

var serializeStandardTag = function serializeStandardTag(tag, element, children, key) {
  var props = element.label ? Object.assign({}, {
    className: element.label
  }) : {};
  return /*#__PURE__*/React.createElement(tag, propsWithUniqueKey(props, key), children);
};

var serializeHyperlink = function serializeHyperlink(linkResolver, element, children, key, colorTheme, colorType) {
  var targetAttr = element.data.target ? {
    target: element.data.target
  } : {};
  var relAttr = element.data.target ? {
    rel: 'noopener'
  } : {};
  var props = Object.assign({
    href: prismicHelpers.Link.url(element.data, linkResolver)
  }, targetAttr, relAttr);
  var LinkWrapper = /*#__PURE__*/React__default.createElement(paygreenUi.Link, {
    key: key,
    colorType: colorType,
    colorTheme: colorTheme
  }, children);
  return /*#__PURE__*/React.createElement('a', propsWithUniqueKey(props, key), LinkWrapper);
};

var serializeLabel = function serializeLabel(element, children, key) {
  var props = element.data ? Object.assign({}, {
    className: element.data.label
  }) : {};
  return /*#__PURE__*/React.createElement('span', propsWithUniqueKey(props, key), children);
};

var serializeSpan = function serializeSpan(content) {
  if (content) {
    return content.split('\n').reduce(function (acc, p) {
      if (acc.length === 0) {
        return [p];
      } else {
        var brIndex = (acc.length + 1) / 2 - 1;
        var br = /*#__PURE__*/React.createElement('br', propsWithUniqueKey({}, brIndex));
        return acc.concat([br, p]);
      }
    }, []);
  } else {
    return null;
  }
};

var serializeImage = function serializeImage(linkResolver, element, key) {
  /*const linkUrl = element.linkTo
      ? LinkHelper.url(element.linkTo, linkResolver)
      : null;*/

  /*const linkTarget =
      element.linkTo && element.linkTo.target
          ? { target: element.linkTo.target }
          : {};*/

  /*const relAttr = linkTarget.target ? { rel: 'noopener' } : {};*/
  var imgChild = /*#__PURE__*/React.createElement('img', {
    src: element.url,
    alt: element.alt || ''
  });
  return /*#__PURE__*/React__default.createElement(paygreenUi.Image, {
    key: key,
    padding: "lg",
    imageType: "picture",
    blockHeight: "auto",
    blockWidth: "auto"
  }, imgChild);
};

var asText = function asText(structuredText) {
  return PrismicRichText__default.asText(structuredText);
};
var renderRichText = function renderRichText(richText, linkResolver, htmlSerializer) {
  var Component = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : React.Fragment;
  var theme = arguments.length > 4 ? arguments[4] : undefined;
  var colorType = arguments.length > 5 ? arguments[5] : undefined;
  var removeP = arguments.length > 6 ? arguments[6] : undefined;
  var args = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
  console.log('linkResolver', linkResolver);
  var colorTheme = theme ? theme : 'primary';
  colorType = colorType ? colorType : 'original';

  if (Object.prototype.toString.call(richText) !== '[object Array]') {
    console.warn("Rich text argument should be an Array. Received ".concat(typeof richtext === "undefined" ? "undefined" : _typeof(richtext)));
    return null;
  }

  var serializedChildren = PrismicRichText__default.serialize(richText, serialize.bind(null, removeP, colorType, colorTheme, linkResolver), htmlSerializer);
  return /*#__PURE__*/React.createElement(Component, args, serializedChildren);
};

var createHtmlSerializer = function createHtmlSerializer() {
  var serializers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var processors = serializers.reduce(function (acc, _ref) {
    var type = _ref.type,
        fn = _ref.fn;
    return Object.assign({}, acc, _defineProperty({}, type, fn));
  }, {});
  return function (type) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return processors[type] ? processors[type].apply(processors, [type].concat(args)) : null;
  };
};

var serializeEmbed = function serializeEmbed(element, key) {
  return /*#__PURE__*/React__default.createElement(paygreenUi.InternalGrid, {
    key: key,
    childrenMarginTop: "lg",
    childrenMarginBottom: "lg",
    justifyContent: "center",
    dangerouslySetInnerHTML: {
      __html: element.oembed.html
    }
  });
};

var RichText = function RichText(_ref2) {
  var Component = _ref2.Component,
      htmlSerializer = _ref2.htmlSerializer,
      linkResolver = _ref2.linkResolver,
      render = _ref2.render,
      renderAsText = _ref2.renderAsText,
      serializeHyperlink = _ref2.serializeHyperlink,
      removeP = _ref2.removeP,
      colorTheme = _ref2.colorTheme,
      colorType = _ref2.colorType,
      rest = _objectWithoutProperties(_ref2, ["Component", "htmlSerializer", "linkResolver", "render", "renderAsText", "serializeHyperlink", "removeP", "colorTheme", "colorType"]);

  var maybeSerializer = htmlSerializer || serializeHyperlink && createHtmlSerializer({}, [{
    type: PrismicRichText.Elements.hyperlink,
    fn: serializeHyperlink
  }]);
  return render ? renderRichText(render, linkResolver, maybeSerializer, Component, colorTheme, colorType, removeP, rest) : null;
};

RichText.propTypes = {
  Component: propTypes.node,
  linkResolver: propTypes.func,
  htmlSerializer: propTypes.func,
  serializeHyperlink: function serializeHyperlink(props, _, componentName) {
    if (props.serializeHyperlink && props.htmlSerializer) {
      return new Error("You cannot specify both 'htmlSerializer' and 'serializeHyperlink'. The latter will be ignored by '".concat(componentName, "'."));
    }
  },
  render: function render(props, _, componentName) {
    if (!props.render) {
      return new Error("Prop 'render' was not specified in '".concat(componentName, "'."));
    }
  }
};
RichText.asText = asText;
RichText.render = renderRichText;
RichText.displayName = 'RichText';
RichText.removeP = false;

exports.RichText = RichText;
