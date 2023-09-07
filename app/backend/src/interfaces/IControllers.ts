import { HttpResponse } from "../controllers/protocols";
import { Products } from "../models/products";

export interface IShopperController {
    handleProducts(): Promise<HttpResponse<Products[]>>;
}

export interface IShopperControllerRepository {
    getAllProducts(): Promise<Products[]>;
}