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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ2xpZW50LmpzIiwic3JjL2FwaS9kb21haW5fbWFwcGluZ3MuanMiLCJzcmMvYXBpL2RvbWFpbnMuanMiLCJzcmMvYXBpL3F1b3RhLmpzIiwic3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsSUFBTSxhQUFhLFFBQVEsZUFBUixDQUFuQjtBQUNBLElBQU0sV0FBVyxRQUFRLGFBQVIsQ0FBakI7QUFDQSxJQUFNLG9CQUFvQixRQUFRLHVCQUFSLENBQTFCOztJQUVNLE07QUFDSixrQkFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUssVUFBTCxHQUFrQixRQUFRLFVBQTFCO0FBQ0EsU0FBSyxlQUFMLEdBQXVCLFFBQVEsZUFBL0I7QUFDQSxTQUFLLE1BQUwsR0FBYyxRQUFRLE1BQXRCO0FBQ0EsU0FBSyxLQUFMLEdBQWEsUUFBUSxLQUFyQjtBQUNBLFNBQUssY0FBTCxHQUFzQjtBQUNwQixpQ0FBeUIsS0FBSztBQURWLEtBQXRCOztBQUlBLGVBQVcsSUFBWDtBQUNBLGFBQVMsSUFBVDtBQUNBLHNCQUFrQixJQUFsQjtBQUNEOzs7O3dCQUVHLEksRUFBMEM7QUFBQSxVQUFwQyxNQUFvQyx1RUFBM0IsS0FBMkI7QUFBQSxVQUFwQixPQUFvQix1RUFBVixFQUFVO0FBQUEsVUFBTixJQUFNOztBQUM1QyxVQUFNLFdBQVMsS0FBSyxNQUFkLEdBQXVCLElBQTdCOztBQUVBLGdCQUFVLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBSyxjQUF2QixFQUF1QyxPQUF2QyxDQUFWOztBQUVBLGFBQU8sS0FBSyxVQUFMLENBQWdCLE1BQWhCLEVBQXdCLEdBQXhCLEVBQTZCLE9BQTdCLEVBQXNDLElBQXRDLENBQVA7QUFDRDs7Ozs7O0FBR0gsT0FBTyxPQUFQLEdBQWlCLE1BQWpCOzs7OztBQzVCQSxJQUFNLFlBQVksa0JBQWxCOztBQUVBLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUI7QUFDckIsU0FBTyxrQkFBUCxHQUE0QixZQUFNO0FBQ2hDLFdBQU8sT0FBTyxHQUFQLENBQVcsU0FBWCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxTQUFPLGdCQUFQLEdBQTBCLFVBQUMsYUFBRCxFQUFtQjtBQUMzQyxXQUFPLE9BQU8sR0FBUCxDQUFXLFNBQVgsRUFBc0IsS0FBdEIsRUFBNkIsRUFBN0IsRUFBaUMsYUFBakMsQ0FBUDtBQUNELEdBRkQ7QUFHRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDWkEsSUFBTSxZQUFZLFVBQWxCOztBQUVBLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUI7QUFDckIsU0FBTyxXQUFQLEdBQXFCLFlBQU07QUFDekIsV0FBTyxPQUFPLEdBQVAsQ0FBVyxTQUFYLENBQVA7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsT0FBTyxPQUFQLEdBQWlCLEtBQWpCOzs7OztBQ1JBLElBQU0sWUFBWSxRQUFsQjs7QUFFQSxTQUFTLEtBQVQsQ0FBZSxNQUFmLEVBQXVCO0FBQ3JCLFNBQU8sUUFBUCxHQUFrQixZQUFNO0FBQ3RCLFdBQU8sT0FBTyxHQUFQLENBQVcsU0FBWCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxTQUFPLFFBQVAsR0FBa0IsVUFBQyxLQUFELEVBQVc7QUFDM0IsV0FBTyxPQUFPLEdBQVAsQ0FBVyxTQUFYLEVBQXNCLEtBQXRCLEVBQTZCLEVBQTdCLEVBQWlDLEtBQWpDLENBQVA7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsT0FBTyxPQUFQLEdBQWlCLEtBQWpCOzs7OztBQ1pBLElBQU0sU0FBUyxRQUFRLFVBQVIsQ0FBZjs7QUFFQSxPQUFPLE9BQVAsR0FBaUI7QUFDZjtBQURlLENBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IGRvbWFpbnNBcGkgPSByZXF1aXJlKCcuL2FwaS9kb21haW5zJyk7XG5jb25zdCBxdW90YUFwaSA9IHJlcXVpcmUoJy4vYXBpL3F1b3RhJyk7XG5jb25zdCBkb21haW5NYXBwaW5nc0FwaSA9IHJlcXVpcmUoJy4vYXBpL2RvbWFpbl9tYXBwaW5ncycpO1xuXG5jbGFzcyBDbGllbnQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5odHRwQ2xpZW50ID0gb3B0aW9ucy5odHRwQ2xpZW50O1xuICAgIHRoaXMucHJvbWlzZVByb3ZpZGVyID0gb3B0aW9ucy5wcm9taXNlUHJvdmlkZXI7XG4gICAgdGhpcy5hcGlVcmwgPSBvcHRpb25zLmFwaVVybDtcbiAgICB0aGlzLnRva2VuID0gb3B0aW9ucy50b2tlbjtcbiAgICB0aGlzLmRlZmF1bHRIZWFkZXJzID0ge1xuICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMudG9rZW59YFxuICAgIH07XG5cbiAgICBkb21haW5zQXBpKHRoaXMpO1xuICAgIHF1b3RhQXBpKHRoaXMpO1xuICAgIGRvbWFpbk1hcHBpbmdzQXBpKHRoaXMpO1xuICB9XG5cbiAgYXBpKHBhdGgsIG1ldGhvZCA9ICdnZXQnLCBoZWFkZXJzID0ge30sIGRhdGEpIHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmFwaVVybH0ke3BhdGh9YDtcblxuICAgIGhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzLCBoZWFkZXJzKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRbbWV0aG9kXSh1cmwsIGhlYWRlcnMsIGRhdGEpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xpZW50O1xuIiwiY29uc3QgQkFTRV9QQVRIID0gJy9kb21haW5fbWFwcGluZ3MnO1xuXG5mdW5jdGlvbiBtaXhpbihjbGllbnQpIHtcbiAgY2xpZW50Lmxpc3REb21haW5NYXBwaW5ncyA9ICgpID0+IHtcbiAgICByZXR1cm4gY2xpZW50LmFwaShCQVNFX1BBVEgpO1xuICB9O1xuXG4gIGNsaWVudC5hZGREb21haW5NYXBwaW5nID0gKGRvbWFpbk1hcHBpbmcpID0+IHtcbiAgICByZXR1cm4gY2xpZW50LmFwaShCQVNFX1BBVEgsICdwdXQnLCB7fSwgZG9tYWluTWFwcGluZyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWl4aW47XG4iLCJjb25zdCBCQVNFX1BBVEggPSAnL2RvbWFpbnMnO1xuXG5mdW5jdGlvbiBtaXhpbihjbGllbnQpIHtcbiAgY2xpZW50Lmxpc3REb21haW5zID0gKCkgPT4ge1xuICAgIHJldHVybiBjbGllbnQuYXBpKEJBU0VfUEFUSCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWl4aW47XG4iLCJjb25zdCBCQVNFX1BBVEggPSAnL3F1b3RhJztcblxuZnVuY3Rpb24gbWl4aW4oY2xpZW50KSB7XG4gIGNsaWVudC5nZXRRdW90YSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2xpZW50LmFwaShCQVNFX1BBVEgpO1xuICB9O1xuXG4gIGNsaWVudC5zZXRRdW90YSA9IChxdW90YSkgPT4ge1xuICAgIHJldHVybiBjbGllbnQuYXBpKEJBU0VfUEFUSCwgJ3B1dCcsIHt9LCBxdW90YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWl4aW47XG4iLCJjb25zdCBDbGllbnQgPSByZXF1aXJlKCcuL0NsaWVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ2xpZW50XG59O1xuIl19
