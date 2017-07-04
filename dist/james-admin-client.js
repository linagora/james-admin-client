(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.james = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domainsApi = require('./api/domains');
var quotaApi = require('./api/quota');
var domainMappingsApi = require('./api/domain_mappings');

var Client = function () {
  function Client(options) {
    _classCallCheck(this, Client);

    this.httpClient = options.httpClient;
    this.promiseProvider = options.promiseProvider;
    this.apiUrl = options.apiUrl;
    this.token = options.token;
    this.defaultHeaders = {
      authorization: 'Bearer ' + this.token
    };

    domainsApi(this);
    quotaApi(this);
    domainMappingsApi(this);
  }

  _createClass(Client, [{
    key: 'api',
    value: function api(path) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var data = arguments[3];

      var url = '' + this.apiUrl + path;

      headers = Object.assign({}, this.defaultHeaders, headers);

      return this.httpClient[method](url, headers, data);
    }
  }]);

  return Client;
}();

module.exports = Client;

},{"./api/domain_mappings":2,"./api/domains":3,"./api/quota":4}],2:[function(require,module,exports){
'use strict';

var BASE_PATH = '/domain_mappings';

function mixin(client) {
  client.listDomainMappings = function () {
    return client.api(BASE_PATH);
  };

  client.addDomainMapping = function (domainMapping) {
    return client.api(BASE_PATH, 'put', {}, domainMapping);
  };
}

module.exports = mixin;

},{}],3:[function(require,module,exports){
'use strict';

var BASE_PATH = '/domains';

function mixin(client) {
  client.listDomains = function () {
    return client.api(BASE_PATH);
  };

  client.createDomain = function (domain) {
    return client.api(BASE_PATH + '/' + domain, 'put');
  };
}

module.exports = mixin;

},{}],4:[function(require,module,exports){
'use strict';

var BASE_PATH = '/quota';

function mixin(client) {
  client.getQuota = function () {
    return client.api(BASE_PATH);
  };

  client.setQuota = function (quota) {
    return client.api(BASE_PATH, 'put', {}, quota);
  };
}

module.exports = mixin;

},{}],5:[function(require,module,exports){
'use strict';

var Client = require('./Client');

module.exports = {
  Client: Client
};

},{"./Client":1}]},{},[5])(5)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ2xpZW50LmpzIiwic3JjL2FwaS9kb21haW5fbWFwcGluZ3MuanMiLCJzcmMvYXBpL2RvbWFpbnMuanMiLCJzcmMvYXBpL3F1b3RhLmpzIiwic3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsSUFBTSxhQUFhLFFBQVEsZUFBUixDQUFuQjtBQUNBLElBQU0sV0FBVyxRQUFRLGFBQVIsQ0FBakI7QUFDQSxJQUFNLG9CQUFvQixRQUFRLHVCQUFSLENBQTFCOztJQUVNLE07QUFDSixrQkFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUssVUFBTCxHQUFrQixRQUFRLFVBQTFCO0FBQ0EsU0FBSyxlQUFMLEdBQXVCLFFBQVEsZUFBL0I7QUFDQSxTQUFLLE1BQUwsR0FBYyxRQUFRLE1BQXRCO0FBQ0EsU0FBSyxLQUFMLEdBQWEsUUFBUSxLQUFyQjtBQUNBLFNBQUssY0FBTCxHQUFzQjtBQUNwQixpQ0FBeUIsS0FBSztBQURWLEtBQXRCOztBQUlBLGVBQVcsSUFBWDtBQUNBLGFBQVMsSUFBVDtBQUNBLHNCQUFrQixJQUFsQjtBQUNEOzs7O3dCQUVHLEksRUFBMEM7QUFBQSxVQUFwQyxNQUFvQyx1RUFBM0IsS0FBMkI7QUFBQSxVQUFwQixPQUFvQix1RUFBVixFQUFVO0FBQUEsVUFBTixJQUFNOztBQUM1QyxVQUFNLFdBQVMsS0FBSyxNQUFkLEdBQXVCLElBQTdCOztBQUVBLGdCQUFVLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBSyxjQUF2QixFQUF1QyxPQUF2QyxDQUFWOztBQUVBLGFBQU8sS0FBSyxVQUFMLENBQWdCLE1BQWhCLEVBQXdCLEdBQXhCLEVBQTZCLE9BQTdCLEVBQXNDLElBQXRDLENBQVA7QUFDRDs7Ozs7O0FBR0gsT0FBTyxPQUFQLEdBQWlCLE1BQWpCOzs7OztBQzVCQSxJQUFNLFlBQVksa0JBQWxCOztBQUVBLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUI7QUFDckIsU0FBTyxrQkFBUCxHQUE0QixZQUFNO0FBQ2hDLFdBQU8sT0FBTyxHQUFQLENBQVcsU0FBWCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxTQUFPLGdCQUFQLEdBQTBCLFVBQUMsYUFBRCxFQUFtQjtBQUMzQyxXQUFPLE9BQU8sR0FBUCxDQUFXLFNBQVgsRUFBc0IsS0FBdEIsRUFBNkIsRUFBN0IsRUFBaUMsYUFBakMsQ0FBUDtBQUNELEdBRkQ7QUFHRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDWkEsSUFBTSxZQUFZLFVBQWxCOztBQUVBLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUI7QUFDckIsU0FBTyxXQUFQLEdBQXFCLFlBQU07QUFDekIsV0FBTyxPQUFPLEdBQVAsQ0FBVyxTQUFYLENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU8sWUFBUCxHQUFzQixVQUFDLE1BQUQsRUFBWTtBQUNoQyxXQUFPLE9BQU8sR0FBUCxDQUFjLFNBQWQsU0FBMkIsTUFBM0IsRUFBcUMsS0FBckMsQ0FBUDtBQUNELEdBRkQ7QUFHRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDWkEsSUFBTSxZQUFZLFFBQWxCOztBQUVBLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUI7QUFDckIsU0FBTyxRQUFQLEdBQWtCLFlBQU07QUFDdEIsV0FBTyxPQUFPLEdBQVAsQ0FBVyxTQUFYLENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU8sUUFBUCxHQUFrQixVQUFDLEtBQUQsRUFBVztBQUMzQixXQUFPLE9BQU8sR0FBUCxDQUFXLFNBQVgsRUFBc0IsS0FBdEIsRUFBNkIsRUFBN0IsRUFBaUMsS0FBakMsQ0FBUDtBQUNELEdBRkQ7QUFHRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDWkEsSUFBTSxTQUFTLFFBQVEsVUFBUixDQUFmOztBQUVBLE9BQU8sT0FBUCxHQUFpQjtBQUNmO0FBRGUsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgZG9tYWluc0FwaSA9IHJlcXVpcmUoJy4vYXBpL2RvbWFpbnMnKTtcbmNvbnN0IHF1b3RhQXBpID0gcmVxdWlyZSgnLi9hcGkvcXVvdGEnKTtcbmNvbnN0IGRvbWFpbk1hcHBpbmdzQXBpID0gcmVxdWlyZSgnLi9hcGkvZG9tYWluX21hcHBpbmdzJyk7XG5cbmNsYXNzIENsaWVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmh0dHBDbGllbnQgPSBvcHRpb25zLmh0dHBDbGllbnQ7XG4gICAgdGhpcy5wcm9taXNlUHJvdmlkZXIgPSBvcHRpb25zLnByb21pc2VQcm92aWRlcjtcbiAgICB0aGlzLmFwaVVybCA9IG9wdGlvbnMuYXBpVXJsO1xuICAgIHRoaXMudG9rZW4gPSBvcHRpb25zLnRva2VuO1xuICAgIHRoaXMuZGVmYXVsdEhlYWRlcnMgPSB7XG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy50b2tlbn1gXG4gICAgfTtcblxuICAgIGRvbWFpbnNBcGkodGhpcyk7XG4gICAgcXVvdGFBcGkodGhpcyk7XG4gICAgZG9tYWluTWFwcGluZ3NBcGkodGhpcyk7XG4gIH1cblxuICBhcGkocGF0aCwgbWV0aG9kID0gJ2dldCcsIGhlYWRlcnMgPSB7fSwgZGF0YSkge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYXBpVXJsfSR7cGF0aH1gO1xuXG4gICAgaGVhZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMsIGhlYWRlcnMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudFttZXRob2RdKHVybCwgaGVhZGVycywgZGF0YSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDbGllbnQ7XG4iLCJjb25zdCBCQVNFX1BBVEggPSAnL2RvbWFpbl9tYXBwaW5ncyc7XG5cbmZ1bmN0aW9uIG1peGluKGNsaWVudCkge1xuICBjbGllbnQubGlzdERvbWFpbk1hcHBpbmdzID0gKCkgPT4ge1xuICAgIHJldHVybiBjbGllbnQuYXBpKEJBU0VfUEFUSCk7XG4gIH07XG5cbiAgY2xpZW50LmFkZERvbWFpbk1hcHBpbmcgPSAoZG9tYWluTWFwcGluZykgPT4ge1xuICAgIHJldHVybiBjbGllbnQuYXBpKEJBU0VfUEFUSCwgJ3B1dCcsIHt9LCBkb21haW5NYXBwaW5nKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtaXhpbjtcbiIsImNvbnN0IEJBU0VfUEFUSCA9ICcvZG9tYWlucyc7XG5cbmZ1bmN0aW9uIG1peGluKGNsaWVudCkge1xuICBjbGllbnQubGlzdERvbWFpbnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNsaWVudC5hcGkoQkFTRV9QQVRIKTtcbiAgfTtcblxuICBjbGllbnQuY3JlYXRlRG9tYWluID0gKGRvbWFpbikgPT4ge1xuICAgIHJldHVybiBjbGllbnQuYXBpKGAke0JBU0VfUEFUSH0vJHtkb21haW59YCwgJ3B1dCcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1peGluO1xuIiwiY29uc3QgQkFTRV9QQVRIID0gJy9xdW90YSc7XG5cbmZ1bmN0aW9uIG1peGluKGNsaWVudCkge1xuICBjbGllbnQuZ2V0UXVvdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNsaWVudC5hcGkoQkFTRV9QQVRIKTtcbiAgfTtcblxuICBjbGllbnQuc2V0UXVvdGEgPSAocXVvdGEpID0+IHtcbiAgICByZXR1cm4gY2xpZW50LmFwaShCQVNFX1BBVEgsICdwdXQnLCB7fSwgcXVvdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1peGluO1xuIiwiY29uc3QgQ2xpZW50ID0gcmVxdWlyZSgnLi9DbGllbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENsaWVudFxufTtcbiJdfQ==
