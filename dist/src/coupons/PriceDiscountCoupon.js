"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceDiscountCoupon = void 0;
var PriceDiscountCoupon = /** @class */ (function () {
    function PriceDiscountCoupon(id, name, value) {
        this.id = id;
        this.name = name;
        this.value = value;
    }
    PriceDiscountCoupon.prototype.calculateDiscount = function (product) {
        return this.value;
    };
    return PriceDiscountCoupon;
}());
exports.PriceDiscountCoupon = PriceDiscountCoupon;
