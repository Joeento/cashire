import { expect } from 'chai';
import 'mocha';
import { ProductInterface } from '../src/interfaces/ProductInterface';
import { Cereal } from '../src/products/Cereal';
import { Fruit } from '../src/products/Fruit';
import { CashRegisterService } from '../src/services/CashRegisterService';

describe('Cash Register',
  () => {
    it('should correctly calculate cost', () => {
      const apple: Fruit = new Fruit(1, "Apple", 5.00, 1);
      const orange: Fruit = new Fruit(1, "orange", 3.00, 1);
      const cheerios: Cereal = new Cereal(1, "Cheerios", 2.00);
      const products: ProductInterface[] = [apple, orange, cheerios];
      expect(CashRegisterService.tallyPrice(products)).to.equal(10.00);
  });
});
