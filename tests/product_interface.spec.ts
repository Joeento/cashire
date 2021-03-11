import { expect } from 'chai';
import 'mocha';
import { ProductInterface } from '../src/interfaces/ProductInterface';
import { Cereal } from '../src/products/Cereal';
import { Fruit } from '../src/products/Fruit';
import { CashRegisterService } from '../src/services/CashRegisterService';

describe('Product Interface',
  () => {
    it('should correctly return cost', () => {
      const cheerios: Cereal = new Cereal(1, "Cheerios", 3.50);
      expect(cheerios.price()).to.equal(3.50);
    });
    it('should correctly calculate produce by pound', () => {
      const apple: Fruit = new Fruit(1, "Apple", 2.50, 3);
      expect(apple.price()).to.equal(7.50);
  });
});
