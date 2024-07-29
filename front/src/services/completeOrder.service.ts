// MessageService.ts
import axios, { AxiosResponse } from 'axios';
import { Product } from '../interfaces/product';


const BASE_URL: string = 'http://localhost:3002';

const CompleteOrderService = {
	//send message
	async completeOrder(items: Product[]) {
		try {
			const result = await axios.post(`${BASE_URL}/products`, items);
			return result.data.success
		} catch (error) {
			console.error('Error complete order:', error);
		}
	},


}


export default CompleteOrderService;
