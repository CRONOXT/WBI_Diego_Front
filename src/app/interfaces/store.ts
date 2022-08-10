import { Shoes } from "./shoes";

export interface Store {
    name: string;
    id: string;
    shoes: Shoes[];

}