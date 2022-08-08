import { brand } from "./brand";
import { model } from "./model";

export interface Shoes {
    id: string;
    name: string;
    imagen: string;
    release_date: string;
    price: number;
    brand: brand;
    model: model;
}