// src/products/schemas/product.schema.ts

import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
	id: { type: Number, required: false },
	name: { type: String, required: true },
	category: { type: String, required: true },
});
// src/products/interfaces/product.interface.ts

import { Document } from 'mongoose';

export interface Product extends Document {
	id: number;
	name: string;
	category: string;
}
