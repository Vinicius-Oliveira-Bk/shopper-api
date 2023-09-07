import { Request, Response } from 'express'
import { MySQLClient } from '../database/mysql'

export async function getAllPacks(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await MySQLClient();
        const packsQuery = await conn.query('SELECT * FROM packs');
        return res.json(packsQuery);
    }
    catch (e) {
        console.log(e)
    }
}

export async function getPack(req: Request, res: Response): Promise<Response | void> {
    try {
        const { code } = req.params;
        const conn = await MySQLClient();
        const packQuery = await conn.query('SELECT * FROM packs WHERE code = ?', [code]);

        return res.json(packQuery);
    }
    catch (e) {
        console.log(e)
    }
}
