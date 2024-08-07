import { makeAutoObservable } from 'mobx';
import { Product } from '../interfaces/product';
import { Category } from '../interfaces/category';
import CategoriesService from '../services/categories.service';
import CompleteOrderService from '../services/completeOrder.service';

class ProductStore {
	items: Product[] = [];
	totalItems: number = 0;
	categories: Category[] = []

	constructor() {
		makeAutoObservable(this);
	}
	getTotalItems() {
		return this.totalItems
	}
	getItems() {
		return this.items;
	}
	getCategories() {
		return this.categories;
	}
	setCategories(categories: Category[]) {
		this.categories = categories
	}
	addItem(product: Product) {
		const existingItem = this.items.find(item => item.name === product.name && item.category === product.category);
		if (existingItem) {
			existingItem.quantity += 1;
		} else {
			this.items.push(product);
		}

		this.updateTotalItems();
	}

	updateTotalItems() {
		this.totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
		return this.totalItems;
	}

	async completeOrder() {
		const res = await CompleteOrderService.completeOrder(this.items)
		if (res) {
			// reset the items
			this.items = []
		}
		return res;
	}
	async getCategoriesFromServer() {
		const res = await CategoriesService.getCategories();
		if (res) {
			this.setCategories(res)
		}
		else {
			this.setCategories([])
		}
	}
	getItemsByCategory() {
		const categories = Array.from(new Set(this.items.map(item => item.category)));
		const categorizedItems = categories.map(category => ({
			category,
			items: this.items.filter(item => item.category === category),
		}));
		return categorizedItems;
	}
}

const productStore = new ProductStore();
export default productStore;
