(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.james = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domainsApi = require('./api/domains');
var quotaApi = require('./api/quota');
var domainMappingsApi = require('./api/domain_mappings');
var groupApi = require('./api/group');

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
    groupApi(this);
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

},{"./api/domain_mappings":2,"./api/domains":3,"./api/group":4,"./api/quota":5}],2:[function(require,module,exports){
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

var BASE_PATH = '/address/groups';

function mixin(client) {
  client.listGroups = function () {
    return client.api(BASE_PATH);
  };

  client.listGroupMembers = function (group) {
    return client.api(BASE_PATH + '/' + group, 'get');
  };

  client.addGroupMember = function (group, member) {
    return client.api(BASE_PATH + '/' + group + '/' + member, 'put');
  };

  client.removeGroupMember = function (group, member) {
    return client.api(BASE_PATH + '/' + group + '/' + member, 'remove');
  };
}

module.exports = mixin;

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict';

var Client = require('./Client');

module.exports = {
  Client: Client
};

},{"./Client":1}]},{},[6])(6)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ2xpZW50LmpzIiwic3JjL2FwaS9kb21haW5fbWFwcGluZ3MuanMiLCJzcmMvYXBpL2RvbWFpbnMuanMiLCJzcmMvYXBpL2dyb3VwLmpzIiwic3JjL2FwaS9xdW90YS5qcyIsInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQU0sYUFBYSxRQUFRLGVBQVIsQ0FBbkI7QUFDQSxJQUFNLFdBQVcsUUFBUSxhQUFSLENBQWpCO0FBQ0EsSUFBTSxvQkFBb0IsUUFBUSx1QkFBUixDQUExQjtBQUNBLElBQU0sV0FBVyxRQUFRLGFBQVIsQ0FBakI7O0lBRU0sTTtBQUNKLGtCQUFZLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBSyxVQUFMLEdBQWtCLFFBQVEsVUFBMUI7QUFDQSxTQUFLLGVBQUwsR0FBdUIsUUFBUSxlQUEvQjtBQUNBLFNBQUssTUFBTCxHQUFjLFFBQVEsTUFBdEI7QUFDQSxTQUFLLEtBQUwsR0FBYSxRQUFRLEtBQXJCO0FBQ0EsU0FBSyxjQUFMLEdBQXNCO0FBQ3BCLGlDQUF5QixLQUFLO0FBRFYsS0FBdEI7O0FBSUEsZUFBVyxJQUFYO0FBQ0EsYUFBUyxJQUFUO0FBQ0Esc0JBQWtCLElBQWxCO0FBQ0EsYUFBUyxJQUFUO0FBQ0Q7Ozs7d0JBRUcsSSxFQUEwQztBQUFBLFVBQXBDLE1BQW9DLHVFQUEzQixLQUEyQjtBQUFBLFVBQXBCLE9BQW9CLHVFQUFWLEVBQVU7QUFBQSxVQUFOLElBQU07O0FBQzVDLFVBQU0sV0FBUyxLQUFLLE1BQWQsR0FBdUIsSUFBN0I7O0FBRUEsZ0JBQVUsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLLGNBQXZCLEVBQXVDLE9BQXZDLENBQVY7O0FBRUEsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsRUFBd0IsR0FBeEIsRUFBNkIsT0FBN0IsRUFBc0MsSUFBdEMsQ0FBUDtBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsTUFBakI7Ozs7O0FDOUJBLElBQU0sWUFBWSxrQkFBbEI7O0FBRUEsU0FBUyxLQUFULENBQWUsTUFBZixFQUF1QjtBQUNyQixTQUFPLGtCQUFQLEdBQTRCLFlBQU07QUFDaEMsV0FBTyxPQUFPLEdBQVAsQ0FBVyxTQUFYLENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU8sZ0JBQVAsR0FBMEIsVUFBQyxhQUFELEVBQW1CO0FBQzNDLFdBQU8sT0FBTyxHQUFQLENBQVcsU0FBWCxFQUFzQixLQUF0QixFQUE2QixFQUE3QixFQUFpQyxhQUFqQyxDQUFQO0FBQ0QsR0FGRDtBQUdEOztBQUVELE9BQU8sT0FBUCxHQUFpQixLQUFqQjs7Ozs7QUNaQSxJQUFNLFlBQVksVUFBbEI7O0FBRUEsU0FBUyxLQUFULENBQWUsTUFBZixFQUF1QjtBQUNyQixTQUFPLFdBQVAsR0FBcUIsWUFBTTtBQUN6QixXQUFPLE9BQU8sR0FBUCxDQUFXLFNBQVgsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsU0FBTyxZQUFQLEdBQXNCLFVBQUMsTUFBRCxFQUFZO0FBQ2hDLFdBQU8sT0FBTyxHQUFQLENBQWMsU0FBZCxTQUEyQixNQUEzQixFQUFxQyxLQUFyQyxDQUFQO0FBQ0QsR0FGRDtBQUdEOztBQUVELE9BQU8sT0FBUCxHQUFpQixLQUFqQjs7Ozs7QUNaQSxJQUFNLFlBQVksaUJBQWxCOztBQUVBLFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUI7QUFDckIsU0FBTyxVQUFQLEdBQW9CLFlBQU07QUFDeEIsV0FBTyxPQUFPLEdBQVAsQ0FBVyxTQUFYLENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU8sZ0JBQVAsR0FBMEIsVUFBQyxLQUFELEVBQVc7QUFDbkMsV0FBTyxPQUFPLEdBQVAsQ0FBYyxTQUFkLFNBQTJCLEtBQTNCLEVBQW9DLEtBQXBDLENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU8sY0FBUCxHQUF3QixVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQ3pDLFdBQU8sT0FBTyxHQUFQLENBQWMsU0FBZCxTQUEyQixLQUEzQixTQUFvQyxNQUFwQyxFQUE4QyxLQUE5QyxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxTQUFPLGlCQUFQLEdBQTJCLFVBQUMsS0FBRCxFQUFRLE1BQVIsRUFBbUI7QUFDNUMsV0FBTyxPQUFPLEdBQVAsQ0FBYyxTQUFkLFNBQTJCLEtBQTNCLFNBQW9DLE1BQXBDLEVBQThDLFFBQTlDLENBQVA7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsT0FBTyxPQUFQLEdBQWlCLEtBQWpCOzs7OztBQ3BCQSxJQUFNLFlBQVksUUFBbEI7O0FBRUEsU0FBUyxLQUFULENBQWUsTUFBZixFQUF1QjtBQUNyQixTQUFPLFFBQVAsR0FBa0IsWUFBTTtBQUN0QixXQUFPLE9BQU8sR0FBUCxDQUFXLFNBQVgsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsU0FBTyxRQUFQLEdBQWtCLFVBQUMsS0FBRCxFQUFXO0FBQzNCLFdBQU8sT0FBTyxHQUFQLENBQVcsU0FBWCxFQUFzQixLQUF0QixFQUE2QixFQUE3QixFQUFpQyxLQUFqQyxDQUFQO0FBQ0QsR0FGRDtBQUdEOztBQUVELE9BQU8sT0FBUCxHQUFpQixLQUFqQjs7Ozs7QUNaQSxJQUFNLFNBQVMsUUFBUSxVQUFSLENBQWY7O0FBRUEsT0FBTyxPQUFQLEdBQWlCO0FBQ2Y7QUFEZSxDQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBkb21haW5zQXBpID0gcmVxdWlyZSgnLi9hcGkvZG9tYWlucycpO1xuY29uc3QgcXVvdGFBcGkgPSByZXF1aXJlKCcuL2FwaS9xdW90YScpO1xuY29uc3QgZG9tYWluTWFwcGluZ3NBcGkgPSByZXF1aXJlKCcuL2FwaS9kb21haW5fbWFwcGluZ3MnKTtcbmNvbnN0IGdyb3VwQXBpID0gcmVxdWlyZSgnLi9hcGkvZ3JvdXAnKTtcblxuY2xhc3MgQ2xpZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuaHR0cENsaWVudCA9IG9wdGlvbnMuaHR0cENsaWVudDtcbiAgICB0aGlzLnByb21pc2VQcm92aWRlciA9IG9wdGlvbnMucHJvbWlzZVByb3ZpZGVyO1xuICAgIHRoaXMuYXBpVXJsID0gb3B0aW9ucy5hcGlVcmw7XG4gICAgdGhpcy50b2tlbiA9IG9wdGlvbnMudG9rZW47XG4gICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHtcbiAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLnRva2VufWBcbiAgICB9O1xuXG4gICAgZG9tYWluc0FwaSh0aGlzKTtcbiAgICBxdW90YUFwaSh0aGlzKTtcbiAgICBkb21haW5NYXBwaW5nc0FwaSh0aGlzKTtcbiAgICBncm91cEFwaSh0aGlzKTtcbiAgfVxuXG4gIGFwaShwYXRoLCBtZXRob2QgPSAnZ2V0JywgaGVhZGVycyA9IHt9LCBkYXRhKSB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5hcGlVcmx9JHtwYXRofWA7XG5cbiAgICBoZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycywgaGVhZGVycyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50W21ldGhvZF0odXJsLCBoZWFkZXJzLCBkYXRhKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENsaWVudDtcbiIsImNvbnN0IEJBU0VfUEFUSCA9ICcvZG9tYWluX21hcHBpbmdzJztcblxuZnVuY3Rpb24gbWl4aW4oY2xpZW50KSB7XG4gIGNsaWVudC5saXN0RG9tYWluTWFwcGluZ3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNsaWVudC5hcGkoQkFTRV9QQVRIKTtcbiAgfTtcblxuICBjbGllbnQuYWRkRG9tYWluTWFwcGluZyA9IChkb21haW5NYXBwaW5nKSA9PiB7XG4gICAgcmV0dXJuIGNsaWVudC5hcGkoQkFTRV9QQVRILCAncHV0Jywge30sIGRvbWFpbk1hcHBpbmcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1peGluO1xuIiwiY29uc3QgQkFTRV9QQVRIID0gJy9kb21haW5zJztcblxuZnVuY3Rpb24gbWl4aW4oY2xpZW50KSB7XG4gIGNsaWVudC5saXN0RG9tYWlucyA9ICgpID0+IHtcbiAgICByZXR1cm4gY2xpZW50LmFwaShCQVNFX1BBVEgpO1xuICB9O1xuXG4gIGNsaWVudC5jcmVhdGVEb21haW4gPSAoZG9tYWluKSA9PiB7XG4gICAgcmV0dXJuIGNsaWVudC5hcGkoYCR7QkFTRV9QQVRIfS8ke2RvbWFpbn1gLCAncHV0Jyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWl4aW47XG4iLCJjb25zdCBCQVNFX1BBVEggPSAnL2FkZHJlc3MvZ3JvdXBzJztcblxuZnVuY3Rpb24gbWl4aW4oY2xpZW50KSB7XG4gIGNsaWVudC5saXN0R3JvdXBzID0gKCkgPT4ge1xuICAgIHJldHVybiBjbGllbnQuYXBpKEJBU0VfUEFUSCk7XG4gIH07XG5cbiAgY2xpZW50Lmxpc3RHcm91cE1lbWJlcnMgPSAoZ3JvdXApID0+IHtcbiAgICByZXR1cm4gY2xpZW50LmFwaShgJHtCQVNFX1BBVEh9LyR7Z3JvdXB9YCwgJ2dldCcpO1xuICB9O1xuXG4gIGNsaWVudC5hZGRHcm91cE1lbWJlciA9IChncm91cCwgbWVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIGNsaWVudC5hcGkoYCR7QkFTRV9QQVRIfS8ke2dyb3VwfS8ke21lbWJlcn1gLCAncHV0Jyk7XG4gIH07XG5cbiAgY2xpZW50LnJlbW92ZUdyb3VwTWVtYmVyID0gKGdyb3VwLCBtZW1iZXIpID0+IHtcbiAgICByZXR1cm4gY2xpZW50LmFwaShgJHtCQVNFX1BBVEh9LyR7Z3JvdXB9LyR7bWVtYmVyfWAsICdyZW1vdmUnKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtaXhpbjtcbiIsImNvbnN0IEJBU0VfUEFUSCA9ICcvcXVvdGEnO1xuXG5mdW5jdGlvbiBtaXhpbihjbGllbnQpIHtcbiAgY2xpZW50LmdldFF1b3RhID0gKCkgPT4ge1xuICAgIHJldHVybiBjbGllbnQuYXBpKEJBU0VfUEFUSCk7XG4gIH07XG5cbiAgY2xpZW50LnNldFF1b3RhID0gKHF1b3RhKSA9PiB7XG4gICAgcmV0dXJuIGNsaWVudC5hcGkoQkFTRV9QQVRILCAncHV0Jywge30sIHF1b3RhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtaXhpbjtcbiIsImNvbnN0IENsaWVudCA9IHJlcXVpcmUoJy4vQ2xpZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDbGllbnRcbn07XG4iXX0=
