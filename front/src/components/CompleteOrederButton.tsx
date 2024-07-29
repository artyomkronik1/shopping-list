// src/components/CompleteOrderButton.tsx
import React, { useContext } from 'react';
import { Button } from '@mui/material';
import productStore from '../store/productsStore';

const CompleteOrderButton: React.FC = () => {

	const handleCompleteOrder = async () => {
		await productStore.completeOrder();
		alert('Order completed');
	};

	return (
		<Button variant="contained" color="secondary" onClick={handleCompleteOrder}>
			Complete Order
		</Button>
	);
};

export default CompleteOrderButton;
