import express from 'express';
import { config } from 'dotenv';
import ShopperController from './controllers';
import { MySQLGetProductsRepository } from './repositories/mysql-get-products';

config();

const app = express();

const port = process.env.PORT || 3001;

app.get('/products', async (req, res) => {
    const getProductsReposity = new MySQLGetProductsRepository();

    const getAllProducts = new ShopperController(getProductsReposity);

    const { body, statusCode } = await getAllProducts.handleProducts();

    res.send(body).status(statusCode);
});

app.listen(port, () => console.log(`Server is running on PORT: ${port}`));