"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashRegisterService = void 0;
var CashRegisterService = /** @class */ (function () {
    function CashRegisterService() {
    }
    CashRegisterService.tallyPrice = function (products) {
        var sum = 0;
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            sum += product.price();
        }
        return Math.max(sum, 0.00);
    };
    CashRegisterService.applyDiscount = function (product, coupon) {
        var discount = coupon.calculateDiscount(product);
        return product.price() - discount;
    };
    return CashRegisterService;
}());
exports.CashRegisterService = CashRegisterService;
