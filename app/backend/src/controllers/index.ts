import { Request, Response } from 'express';
import { db } from '../../connection';

export default class ShopperController {

  public getAllProducts = async (req: Request, res: Response) => {
    const queryProducts = 'SELECT * FROM products';

    db.query(queryProducts, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
  };
}
