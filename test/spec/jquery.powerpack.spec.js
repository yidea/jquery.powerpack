var expect = require('chai').expect;
var sinon = require('sinon');
var $ = require("../../lib/jquery.powerpack");

describe("jquery.powerpack", function () {
  beforeEach(function () {
    this.fixturesId = "#fixtures-visible";
    this.$fixture = $("<div>text</div>").appendTo($(this.fixturesId));
  });

  afterEach(function () {
    this.$fixture.remove();
  });

  describe("$.isInViewport", function () {
    it("should work in general cases", function () {
      var $div = $("<div>", {
        "css": {"position": "absolute","left": 0, "top": 0}
      });
      this.$fixture.append($div);
      expect($div.isInViewport()).to.be.true;

      $div.css({"left": "-100px"});
      expect($div.isInViewport()).to.be.false;

      $div.css({"left": "4000px"});
      expect($div.isInViewport()).to.be.false;

      $div.css({"top": "-100px", "left": 0});
      expect($div.isInViewport()).to.be.false;

      $div.css({"top": "4000px", "left": 0});
      expect($div.isInViewport()).to.be.false;
    });

  });

});
