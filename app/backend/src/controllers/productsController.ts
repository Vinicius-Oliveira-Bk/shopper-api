import { Request, Response } from 'express'
import { MySQLClient } from '../database/mysql'
import { Products } from '../interfaces/IProducts'

export async function getAllProducts(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await MySQLClient();
        const productsQuery = await conn.query('SELECT * FROM products');
        return res.json(productsQuery);
    }
    catch (e) {
        console.log(e)
    }
}

export async function getProduct(req: Request, res: Response): Promise<Response | void> {
    try {
        const { code } = req.params;
        const conn = await MySQLClient();
        const productQuery = await conn.query('SELECT * FROM products WHERE code = ?', [code]);

        return res.json(productQuery);
    }
    catch (e) {
        console.log(e)
    }
}

export async function updatePost(req: Request, res: Response) {
    const id = req.params.postId;
    const updatePost: Products = req.body;
    const conn = await MySQLClient();
    await conn.query('UPDATE posts set ? WHERE id = ?', [updatePost, id]);
    res.json({
        message: 'Post Updated'
    });
}
