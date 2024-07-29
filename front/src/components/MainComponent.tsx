import React, { useContext, useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import productStore from '../store/productsStore';
import AddProductForm from './AddProductForm';
import ProductsList from './ProductsList';
import { CartContext } from '../context/context';

const MainComponent: React.FC = observer(() => {
	const cartStore = useContext(CartContext);
	useEffect(() => {
		const fetchCategories = async () => {
			try {
				await productStore.getCategoriesFromServer();
			} catch (error) {
				console.error('Failed to fetch categories', error);
			}
		};

		fetchCategories();
	}, []);

	const handleCompleteOrder = async () => {
		const res = await productStore.completeOrder();

		if (res) {
			alert('הזמנה בוצעה בהצלחה ונשלחה לשרת');
		}
		else {
			alert('קרתה שגיעה וההזמנה לא נשלחה לשרת');

		}
	};
	return (
		<div dir='rtl'>
			<Container>
				{/* title */}
				<div style={{ display: 'flex', padding: '20px', background: '#f0eded', justifyContent: 'center' }}>
					<h4 style={{ fontSize: '26px', color: '#0a66c2' }}> רשימת קניות </h4>
				</div>
				<Box my={2}>
					{/* total items */}
					<Typography variant="h6" style={{ color: '#0a66c2', justifyContent: 'end', display: 'flex' }}>
						סה"כ : {productStore.totalItems}
					</Typography>
					{/* form for add prodyct */}
					<AddProductForm />
					<div style={{ border: '1px solid #dcdcdc', width: '100%', marginTop: '50px', marginBottom: '50px' }}></div>
					{/* ProductsList */}
					<ProductsList />
					{/* complete order */}
					{productStore.items.length > 0 && (
						<Button style={{ borderRadius: '25px' }} variant="contained" color="success" onClick={handleCompleteOrder}>
							סיים הזמנה
						</Button>
					)}

				</Box>
			</Container>
		</div>
	);
});

export default MainComponent;
