"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PercentDiscountCoupon = void 0;
var PercentDiscountCoupon = /** @class */ (function () {
    function PercentDiscountCoupon(id, name, percent) {
        this.id = id;
        this.name = name;
        this.percent = percent;
    }
    PercentDiscountCoupon.prototype.calculateDiscount = function (product) {
        return product.price() * (this.percent / 100);
    };
    return PercentDiscountCoupon;
}());
exports.PercentDiscountCoupon = PercentDiscountCoupon;
