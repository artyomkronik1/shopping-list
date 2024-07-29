// src/products/products.controller.ts

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './product.service';
import { Product } from './product.schema';

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) { }

	@Post()
	async createProduct(@Body() items: Product[]) {
		return this.productsService.createProducts(items);
	}

	@Get()
	async getProducts() {
		return this.productsService.getProducts();
	}
}
