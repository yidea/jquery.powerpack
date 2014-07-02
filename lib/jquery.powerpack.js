var jQuery = require("jquery");

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
