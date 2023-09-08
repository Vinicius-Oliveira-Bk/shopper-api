import { Request, Response } from 'express'

export function shopperApi(req: Request, res: Response): Response {
   return res.json('shopper api'); 
}
