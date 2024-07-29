import * as mongoose from 'mongoose';

export const CategoriesSchema = new mongoose.Schema({
	name: { type: String, required: true },
})

export interface Category {
	id: string;
	name: string
}

