"use strict";

var loopy = require("../../../src/ch-2/looping-a-triangle/looping-a-triangle");
var expect = require("chai").expect;

describe("Test the module with kind values", function() {

    it("Should return a #######", function(done) {
        expect(loopy.triangleLoop()).eql("#######");
        done();
    });
});
