import { CouponInterface } from "./src/interfaces/CouponInterface";
import { ProductInterface } from "./src/interfaces/ProductInterface";

import { PercentDiscountCoupon } from "./src/coupons/PercentDiscountCoupon";
import { PriceDiscountCoupon } from "./src/coupons/PriceDiscountCoupon";

import { Cereal } from "./src/products/Cereal";
import { Fruit } from "./src/products/Fruit";

import { TaxService } from "./src/services/TaxService";
import { CashRegisterService } from "./src/services/CashRegisterService";

export { CouponInterface,
         ProductInterface,
         PercentDiscountCoupon,
         PriceDiscountCoupon,
         Cereal,
         Fruit,
         TaxService,
         CashRegisterService
        }
