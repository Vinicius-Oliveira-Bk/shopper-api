import { MySQLClient } from "../database/mysql";
import { IShopperControllerRepository } from "../interfaces/IControllers";
import { Products } from "../models/products";

export class MySQLGetProductsRepository implements IShopperControllerRepository{
    async getAllProducts(): Promise<Products[]> {
        try {
          const connection = await MySQLClient();
    
          const [rows] = await connection.execute('SELECT * FROM products');
    
          return rows as Products[];
        } catch (error) {
          throw new Error(`Error fetching products: ${error}`);
        }
      }
}
