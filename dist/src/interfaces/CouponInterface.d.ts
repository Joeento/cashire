import { ProductInterface } from "./ProductInterface";
export interface CouponInterface {
    id: number;
    name: string;
    calculateDiscount(product: ProductInterface): number;
}
