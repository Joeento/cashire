"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var Cereal_1 = require("../src/products/Cereal");
var Fruit_1 = require("../src/products/Fruit");
describe('Product Interface', function () {
    it('should correctly return cost', function () {
        var cheerios = new Cereal_1.Cereal(1, "Cheerios", 3.50);
        chai_1.expect(cheerios.price()).to.equal(3.50);
    });
    it('should correctly calculate produce by pound', function () {
        var apple = new Fruit_1.Fruit(1, "Apple", 2.50, 3);
        chai_1.expect(apple.price()).to.equal(7.50);
    });
});
