import { MySQLClient } from "../database/mysql";
import { Products } from "../models/products";
import { Request, Response } from 'express'

export async function getAllProducts(): Promise<Products[]> {
  try {
    const connection = await MySQLClient();

    const [allItems] = await connection.execute('SELECT * FROM products');

    return allItems as Products[];
  } catch (error) {
    throw new Error(`Error fetching products: ${error}`);
  }
}

export async function getProduct(req: Request): Promise<Products[]> {
  try {
    const connection = await MySQLClient();

    const [item] = await connection.execute('SELECT * FROM products WHERE code = ?', [req.params.code]);

    return item as Products[];
  } catch (error) {
    throw new Error(`Error fetching products: ${error}`);
  }
}

export async function getAllPacks(): Promise<Products[]> {
  try {
    const connection = await MySQLClient();

    const [allPacks] = await connection.execute('SELECT * FROM packs');

    return allPacks as Products[];
  } catch (error) {
    throw new Error(`Error fetching packs: ${error}`);
  }
}

export async function getPack(req: Request): Promise<Products[]> {
  try {
    const connection = await MySQLClient();

    const [pack] = await connection.execute('SELECT * FROM packs WHERE code = ?', [req.params.code]);

    return pack as Products[];
  } catch (error) {
    throw new Error(`Error fetching pack: ${error}`);
  }
}

export async function updatePost(req: Request, res: Response) {
    const code = req.params.code;
    const updateProduct: Products = req.body;
    const conn = await MySQLClient();
    await conn.query('UPDATE posts set ? WHERE id = ?', [updateProduct, code]);
    res.json({
        message: 'Product Updated'
    });
}