"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cereal = void 0;
var Cereal = /** @class */ (function () {
    function Cereal(id, name, cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
    Cereal.prototype.price = function () {
        return this.cost;
    };
    return Cereal;
}());
exports.Cereal = Cereal;
