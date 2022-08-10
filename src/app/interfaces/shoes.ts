import { brand } from "./brand";
import { model } from "./model";
import { Store } from "./store";

export interface Shoes {
    id: string;
    name: string;
    imagen: string;
    release_date: string;
    price: number;
    brand: brand;
    model: model;
    store: Store[];
}