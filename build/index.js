"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalize;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function normalize(numbers) {
  var min = Math.min.apply(Math, _toConsumableArray(numbers));
  var max = Math.max.apply(Math, _toConsumableArray(numbers));
  var denominator = max - min;
  return numbers.map(function (n) {
    return (n - min) / denominator;
  });
}