"use strict";

var jQuery = require("jquery");

(function($){
  var $window = $(window);

  $.fn.isInViewport = function (options) {
    options = options || {};
    options.threshold = options.threshold || 0;
    options.fully = options.fully || false;
    var el = this;
    if (el instanceof $) { el = el[0]; }
    // getBoundingClientRect return info relative to window (exclude scroll offset)
    var rect = el.getBoundingClientRect(),
      viewportHeight = $window.height(),
      viewportWidth = $window.width();

    if (options.fully) {
      // test if the block is fully in viewport
      return (rect.top >= 0 && rect.bottom <= viewportHeight && rect.left >= 0 &&
        rect.right <= viewportWidth);
    } else {
      // partial in viewport, threshold take effect here
      return rect.top < (viewportHeight + options.threshold) &&
        rect.bottom > (0 - options.threshold) &&
        rect.left < (viewportWidth + options.threshold) &&
        rect.right > (0 - options.threshold);
    }
  };

  $.fn.belowTheFold = function (options) {
    options = options || {};
    options.threshold = options.threshold || 0;
    var rect = this.get(0).getBoundingClientRect(),
      viewportHeight = $window.height();
    return rect.top >= (viewportHeight + options.threshold);
  };

  $.fn.aboveTheTop = function (options) {
    options = options || {};
    options.threshold = options.threshold || 0;
    var rect = this.get(0).getBoundingClientRect();
    return rect.bottom <= (0 - options.threshold);
  };

  $.fn.rightOfScreen = function (options) {
    options = options || {};
    options.threshold = options.threshold || 0;
    var rect = this.get(0).getBoundingClientRect(),
      viewportWidth = $window.width();
    return rect.left >= (viewportWidth + options.threshold);
  };

  $.fn.leftOfScreen = function (options) {
    options = options || {};
    options.threshold = options.threshold || 0;
    var rect = this.get(0).getBoundingClientRect();
    return rect.right <= (0 - options.threshold);
  };

}(jQuery));

module.exports = jQuery;
