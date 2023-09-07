import { IShopperController, IShopperControllerRepository } from '../interfaces/IControllers';

export default class ShopperController implements IShopperController {
  constructor(private readonly getAllProductsRepository: IShopperControllerRepository) {}

  async handleProducts() {
    try {
      const products = await this.getAllProductsRepository.getAllProducts();

      return {
        status: 'SUCCESSFUL',
        statusCode: 200,
        body: products,
      }
    } catch (error: unknown) {
      return {
        status: 'ERROR',
        statusCode: 500,
        body: "Internal Server Error"
      }
    }

  }
}
