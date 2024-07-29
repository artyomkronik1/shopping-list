// MessageService.ts
import axios, { AxiosResponse } from 'axios';


const BASE_URL: string = 'http://localhost:3000';

const CategoriesService = {
	//send message
	async getCategories() {
		try {
			const result = await axios.get('http://localhost:3002/categories');
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


export default CategoriesService;
