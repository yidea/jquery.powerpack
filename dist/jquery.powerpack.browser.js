(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var jQuery = window.$;

(function($){
  var $window = $(window);

  $.fn.isInViewport = function () {
    var el = this;
    if (el instanceof $) { el = el[0]; }
    // getBoundingClientRect return info relative to window (exclude scroll offset)
    var rect = el.getBoundingClientRect(),
      viewportHeight = $window.height(),
      viewportWidth = $window.width();
    return (rect.top >= 0 && rect.left >= 0 && rect.right <= viewportWidth && rect.bottom <= viewportHeight);
  };

  $.fn.belowTheFold = function (options) {
    options = options || {};
    options.threshold = options.threshold || 0;
    var el = this;
    if (el instanceof $) { el = el[0]; }
    var rect = el.getBoundingClientRect(),
      viewportHeight = $window.height();

    return (rect.top - options.threshold) >= viewportHeight;
  };

}(jQuery));

module.exports = jQuery;

},{}]},{},[1]);