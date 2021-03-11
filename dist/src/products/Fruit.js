"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruit = void 0;
var Fruit = /** @class */ (function () {
    function Fruit(id, name, costPerPound, pounds) {
        this.id = id;
        this.name = name;
        this.costPerPound = costPerPound;
        this.pounds = pounds;
    }
    Fruit.prototype.price = function () {
        return this.costPerPound * this.pounds;
    };
    return Fruit;
}());
exports.Fruit = Fruit;
