import { ProductInterface } from "../interfaces/ProductInterface";
export declare class Fruit implements ProductInterface {
    id: number;
    name: string;
    costPerPound: number;
    pounds: number;
    constructor(id: number, name: string, costPerPound: number, pounds: number);
    price(): number;
}
