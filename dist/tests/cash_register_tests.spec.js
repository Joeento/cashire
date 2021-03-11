"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var PriceDiscountCoupon_1 = require("../src/coupons/PriceDiscountCoupon");
var PercentDiscountCoupon_1 = require("../src/coupons/PercentDiscountCoupon");
var Cereal_1 = require("../src/products/Cereal");
var Fruit_1 = require("../src/products/Fruit");
var CashRegisterService_1 = require("../src/services/CashRegisterService");
describe('Cash Register', function () {
    it('should take off percentage discount', function () {
        var cheerios = new Cereal_1.Cereal(1, "Cheerios", 2.00);
        var tenPercentCoupon = new PercentDiscountCoupon_1.PercentDiscountCoupon(1, "10% Off Produce!", 10);
        chai_1.expect(CashRegisterService_1.CashRegisterService.applyDiscount(cheerios, tenPercentCoupon)).to.equal(1.80);
    });
    it('should take off cash discount', function () {
        var cheerios = new Cereal_1.Cereal(1, "Cheerios", 3.00);
        var oneDollarCoupon = new PriceDiscountCoupon_1.PriceDiscountCoupon(1, "$1.00 Off Produce!", 1);
        chai_1.expect(CashRegisterService_1.CashRegisterService.applyDiscount(cheerios, oneDollarCoupon)).to.equal(2.00);
    });
    it('should correctly sum costs', function () {
        var apple = new Fruit_1.Fruit(1, "Apple", 5.00, 1);
        var orange = new Fruit_1.Fruit(2, "orange", 3.00, 1);
        var cheerios = new Cereal_1.Cereal(3, "Cheerios", 2.00);
        var products = [apple, orange, cheerios];
        chai_1.expect(CashRegisterService_1.CashRegisterService.tallyPrice(products)).to.equal(10.00);
    });
});
