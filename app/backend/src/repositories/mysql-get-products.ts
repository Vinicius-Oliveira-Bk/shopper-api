import { IShopperControllerRepository } from "../interfaces/IControllers";
import { Products } from "../models/products";

export class MySQLGetProductsRepository implements IShopperControllerRepository{
    async getAllProducts(): Promise<Products[]> {
        return [
            {
                code: 1,
                name: 'Product 1',
                costPrice: 10.10,
                salePrice: 12.00,
            }
        ];
    }
}