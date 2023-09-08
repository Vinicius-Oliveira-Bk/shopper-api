import { Router } from 'express'
import {
    getAllPacks,
    getPack,
} from '../controllers/packsController'

const routerPack = Router();

routerPack.route('/packs')
    .get(getAllPacks)

    routerPack.route('/packs/:code')
    .get(getPack);

export default routerPack;