import { expect } from 'chai';
import 'mocha';
import { PriceDiscountCoupon } from '../src/coupons/PriceDiscountCoupon';
import { PercentDiscountCoupon } from '../src/coupons/PercentDiscountCoupon';
import { ProductInterface } from '../src/interfaces/ProductInterface';
import { Cereal } from '../src/products/Cereal';
import { Fruit } from '../src/products/Fruit';
import { CashRegisterService } from '../src/services/CashRegisterService';
import { TaxService } from '../src/services/TaxService';
import { Bundle } from '../src/products/Bundle';

describe('Cash Register',
  () => {
    const taxService: TaxService = new TaxService();
    const cashRegisterService: CashRegisterService = new CashRegisterService(taxService);
    it('should take off percentage discount on one product', () => {
      const cheerios: Cereal = new Cereal(1, "Cheerios", 2.00);
      const tenPercentCoupon: PercentDiscountCoupon = new PercentDiscountCoupon(1, "10% Off Produce!", 10);
      expect(cashRegisterService.applyDiscount(cheerios, tenPercentCoupon)).to.equal(1.80);
    });
    it('should take off percentage discount on multiple products', () => {
      const apple: Fruit = new Fruit(1, "Apple", 5.00, 1);
      const orange: Fruit = new Fruit(2, "orange", 3.00, 1);
      const cheerios: Cereal = new Cereal(3, "Cheerios", 2.00);
      const cart: Bundle = new Bundle(1, "Cart");
      cart.addItem(apple);
      cart.addItem(orange);
      cart.addItem(cheerios);

      const tenPercentCoupon: PercentDiscountCoupon = new PercentDiscountCoupon(1, "10% Off Produce!", 10);
      expect(cashRegisterService.applyDiscount(cart, tenPercentCoupon)).to.equal(9.00);
    });
    it('should take off cash discount', () => {
      const cheerios: Cereal = new Cereal(1, "Cheerios", 3.00);
      const oneDollarCoupon: PriceDiscountCoupon = new PriceDiscountCoupon(1, "$1.00 Off Produce!", 1);
      expect(cashRegisterService.applyDiscount(cheerios, oneDollarCoupon)).to.equal(2.00);
    });
    it('should correctly sum costs', () => {
      const apple: Fruit = new Fruit(1, "Apple", 5.00, 1);
      const orange: Fruit = new Fruit(2, "orange", 3.00, 1);
      const cheerios: Cereal = new Cereal(3, "Cheerios", 2.00);
      const products: ProductInterface[] = [apple, orange, cheerios];
      expect(cashRegisterService.tallyPrice(products)).to.equal(10.00);
    });
    it('should calculate tax', async () => {
      const apple: Fruit = new Fruit(1, "Apple", 5.00, 1);
      const tax = await cashRegisterService.calculateTax(apple.price(), 'NY');
      expect(tax).to.equal(.43);
    });
    it('should find total price without coupon', async () => {
      const apple: Fruit = new Fruit(1, "Apple", 5.00, 1);
      const orange: Fruit = new Fruit(2, "Orange", 3.00, 1);

      const cheerios: Cereal = new Cereal(3, "Cheerios", 2.00);
      const fruitLoops: Cereal = new Cereal(4, "Fruit Loops", 2.00);
      const cerealBundle: Bundle = new Bundle(1, "Cereal Bundle");
      cerealBundle.addItem(cheerios);
      cerealBundle.addItem(fruitLoops);

      expect(await cashRegisterService.checkout([apple, orange, cerealBundle], 'NY')).to.equal(13.02);
    });
    it('should find total price with discount coupon', async () => {
      const tenPercentCoupon: PercentDiscountCoupon = new PercentDiscountCoupon(1, "10% Off!", 10);

      const apple: Fruit = new Fruit(1, "Apple", 5.00, 1);
      const orange: Fruit = new Fruit(2, "Orange", 3.00, 1);

      const cheerios: Cereal = new Cereal(3, "Cheerios", 2.00);
      const fruitLoops: Cereal = new Cereal(4, "Fruit Loops", 2.00);
      const cerealBundle: Bundle = new Bundle(1, "Cereal Bundle");
      cerealBundle.addItem(cheerios);
      cerealBundle.addItem(fruitLoops);

      expect(await cashRegisterService.checkoutWithCoupon([apple, orange, cerealBundle], tenPercentCoupon, 'NY')).to.equal(11.72);
    });
});
