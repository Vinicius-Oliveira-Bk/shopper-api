import express from 'express';
import { config } from 'dotenv';
import ShopperController from './controllers';
import { MySQLGetProductsRepository } from './repositories/mysql-get-products';
import { MySQLClient } from './database/mysql';

config();

const main = async () => {
    const app = express();
    await MySQLClient();

    app.get('/products', async (req, res) => {
        const getProductsReposity = new MySQLGetProductsRepository();
    
        const getAllProducts = new ShopperController(getProductsReposity);
    
        const { body, statusCode } = await getAllProducts.handleProducts();
    
        res.send(body).status(statusCode);
    });

    const port = process.env.PORT || 3001;
      
    app.listen(port, () => console.log(`Server is running on PORT: ${port}`));
};

main();
