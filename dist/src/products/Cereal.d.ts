import { ProductInterface } from "../interfaces/ProductInterface";
export declare class Cereal implements ProductInterface {
    id: number;
    name: string;
    cost: number;
    constructor(id: number, name: string, cost: number);
    price(): number;
}
