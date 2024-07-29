// src/products/products.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';

@Injectable()
export class ProductsService {
	constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

	async createProducts(items: Product[]): Promise<any> {
		try {
			const result = await this.productModel.insertMany(items);
			return {
				success: true,
				product: result
			};
		} catch (error) {
			throw new Error(`Failed to insert products: ${error.message}`);
		}
	}

	async getProducts(): Promise<Product[]> {
		return this.productModel.find().exec();
	}
}
