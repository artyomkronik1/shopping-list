// MessageService.ts
import axios, { AxiosResponse } from 'axios';
import { Product } from '../interfaces/product';


const BASE_URL: string = 'http://localhost:3000';

const CompleteOrderService = {
	//send message
	async completeOrder(items: Product[]) {
		try {
			const result = await axios.post('http://localhost:3002/products', items);
			if (result.data.success) {

				return result.data;
			} else {
				return result.data;
			}
		} catch (error) {
			console.error('Error login:', error);
		}
	},


}


export default CompleteOrderService;
