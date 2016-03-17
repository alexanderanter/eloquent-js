/**
 * Module for FizzBuzz exercise
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.fizzbuzz = function() {
    for (var i = 0; i < 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz");
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz");
        } else if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
        } else {
            console.log(i);
        }
    }
};
