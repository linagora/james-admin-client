(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.james = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domainApi = require('./api/domain');

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

    domainApi(this);
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

},{"./api/domain":2}],2:[function(require,module,exports){
'use strict';

var BASE_PATH = '/domains';

function mixin(client) {
  client.listDomains = function () {
    return client.api(BASE_PATH);
  };
}

module.exports = mixin;

},{}],3:[function(require,module,exports){
'use strict';

var Client = require('./Client');

module.exports = {
  Client: Client
};

},{"./Client":1}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ2xpZW50LmpzIiwic3JjL2FwaS9kb21haW4uanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQSxJQUFNLFlBQVksUUFBUSxjQUFSLENBQWxCOztJQUVNLE07QUFDSixrQkFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUssVUFBTCxHQUFrQixRQUFRLFVBQTFCO0FBQ0EsU0FBSyxlQUFMLEdBQXVCLFFBQVEsZUFBL0I7QUFDQSxTQUFLLE1BQUwsR0FBYyxRQUFRLE1BQXRCO0FBQ0EsU0FBSyxLQUFMLEdBQWEsUUFBUSxLQUFyQjtBQUNBLFNBQUssY0FBTCxHQUFzQjtBQUNwQixpQ0FBeUIsS0FBSztBQURWLEtBQXRCOztBQUlBLGNBQVUsSUFBVjtBQUNEOzs7O3dCQUVHLEksRUFBMEM7QUFBQSxVQUFwQyxNQUFvQyx1RUFBM0IsS0FBMkI7QUFBQSxVQUFwQixPQUFvQix1RUFBVixFQUFVO0FBQUEsVUFBTixJQUFNOztBQUM1QyxVQUFNLFdBQVMsS0FBSyxNQUFkLEdBQXVCLElBQTdCOztBQUVBLGdCQUFVLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBSyxjQUF2QixFQUF1QyxPQUF2QyxDQUFWOztBQUVBLGFBQU8sS0FBSyxVQUFMLENBQWdCLE1BQWhCLEVBQXdCLEdBQXhCLEVBQTZCLE9BQTdCLEVBQXNDLElBQXRDLENBQVA7QUFDRDs7Ozs7O0FBR0gsT0FBTyxPQUFQLEdBQWlCLE1BQWpCOzs7OztBQ3hCQSxJQUFNLFlBQVksVUFBbEI7O0FBRUEsU0FBUyxLQUFULENBQWUsTUFBZixFQUF1QjtBQUNyQixTQUFPLFdBQVAsR0FBcUIsWUFBTTtBQUN6QixXQUFPLE9BQU8sR0FBUCxDQUFXLFNBQVgsQ0FBUDtBQUNELEdBRkQ7QUFHRDs7QUFFRCxPQUFPLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDUkEsSUFBTSxTQUFTLFFBQVEsVUFBUixDQUFmOztBQUVBLE9BQU8sT0FBUCxHQUFpQjtBQUNmO0FBRGUsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgZG9tYWluQXBpID0gcmVxdWlyZSgnLi9hcGkvZG9tYWluJyk7XG5cbmNsYXNzIENsaWVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmh0dHBDbGllbnQgPSBvcHRpb25zLmh0dHBDbGllbnQ7XG4gICAgdGhpcy5wcm9taXNlUHJvdmlkZXIgPSBvcHRpb25zLnByb21pc2VQcm92aWRlcjtcbiAgICB0aGlzLmFwaVVybCA9IG9wdGlvbnMuYXBpVXJsO1xuICAgIHRoaXMudG9rZW4gPSBvcHRpb25zLnRva2VuO1xuICAgIHRoaXMuZGVmYXVsdEhlYWRlcnMgPSB7XG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy50b2tlbn1gXG4gICAgfTtcblxuICAgIGRvbWFpbkFwaSh0aGlzKTtcbiAgfVxuXG4gIGFwaShwYXRoLCBtZXRob2QgPSAnZ2V0JywgaGVhZGVycyA9IHt9LCBkYXRhKSB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5hcGlVcmx9JHtwYXRofWA7XG5cbiAgICBoZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycywgaGVhZGVycyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50W21ldGhvZF0odXJsLCBoZWFkZXJzLCBkYXRhKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENsaWVudDtcbiIsImNvbnN0IEJBU0VfUEFUSCA9ICcvZG9tYWlucyc7XG5cbmZ1bmN0aW9uIG1peGluKGNsaWVudCkge1xuICBjbGllbnQubGlzdERvbWFpbnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNsaWVudC5hcGkoQkFTRV9QQVRIKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtaXhpbjtcbiIsImNvbnN0IENsaWVudCA9IHJlcXVpcmUoJy4vQ2xpZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDbGllbnRcbn07XG4iXX0=
