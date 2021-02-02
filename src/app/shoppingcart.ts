import { Shoppingcartitem } from "./shoppingcartitem";

export interface Shoppingcart {
    id: string;
    items: Array<Shoppingcartitem>
}