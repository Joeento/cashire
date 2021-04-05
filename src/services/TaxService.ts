import "reflect-metadata";
import { injectable } from "inversify";

import { CouponInterface } from "../interfaces/CouponInterface";
import { ProductInterface } from "../interfaces/ProductInterface";

@injectable()
export class TaxService {
  getTaxRate(state: string): Promise<number> {
    const ratesByStates: { [key: string]: number } = {
      'AZ': 8.40,
      'CA': 8.68,
      'NY': 8.52,
      'PA': 6.34
      //TODO: Add more states
    };
    const ratePromise = new Promise<number>((resolve): void => {
      resolve(ratesByStates[state]);
    });
    return ratePromise;
  }
}
