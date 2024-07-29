import React, { useContext, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import productStore from '../store/productsStore';
import ProductComponent from './ProductComponent';
import CompleteOrderButton from './CompleteOrederButton';
import ItemList from './ProductsList';
import { CartContext } from '../context/context';
import CategoriesService from '../services/categories.service';

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
	}, []); //
	return (
		<div dir='rtl'>
			<Container>
				<div style={{ display: 'flex', padding: '20px', background: '#cfcccc', justifyContent: 'center' }}>
					<h4 style={{ fontSize: '26px' }}> רשימת קניות </h4>
				</div>
				<Box my={4}>
					<Typography variant="h6" style={{ justifyContent: 'end', display: 'flex' }}>
						סה"כ : {productStore.totalItems}
					</Typography>

					<ProductComponent />
					<div style={{ border: '1px solid black', width: '100%', marginTop: '50px', marginBottom: '50px' }}></div>
					<ItemList />
					{productStore.items.length > 0 && (
						<CompleteOrderButton />
					)}

				</Box>
			</Container>
		</div>
	);
});

export default MainComponent;
