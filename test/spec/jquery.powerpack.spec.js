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
    it("should work in general cases when set {fully: true}", function () {
      var $div = $("<div>", {
        "css": {"position": "absolute","left": 0, "top": 0, "width": "200px", "height": "200px"},
        "text": "test"
      });
      this.$fixture.append($div);
      expect($div.isInViewport({fully: true})).to.be.true;

      $div.css({"left": "-100px"});
      expect($div.isInViewport({fully: true})).to.be.false;

      $div.css({"left": "4000px"});
      expect($div.isInViewport({fully: true})).to.be.false;

      $div.css({"top": "-100px", "left": 0});
      expect($div.isInViewport({fully: true})).to.be.false;

      $div.css({"top": "4000px", "left": 0});
      expect($div.isInViewport({fully: true})).to.be.false;
    });

    it("should work in general cases when set {fully: false} or not set", function () {
      var $div = $("<div>", {
        "css": {"position": "absolute","left": 0, "top": 0, "width": "200px", "height": "200px"},
        "text": "test"
      });
      this.$fixture.append($div);
      expect($div.isInViewport({fully: false})).to.be.true;

      $div.css({"left": "-100px"});
      expect($div.isInViewport({fully: false})).to.be.true;

      $div.css({"left": "-210px", "top": "-210px"});
      expect($div.isInViewport({threshold: 0})).to.be.false;
      expect($div.isInViewport({threshold: 100})).to.be.true;

      $div.css({"top": $(window).height() + 100, "left": 0});
      expect($div.isInViewport({threshold: 0})).to.be.false;
      expect($div.isInViewport({threshold: 101})).to.be.true;
    });
  });

});
