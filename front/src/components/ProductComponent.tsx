// src/components/ItemForm.tsx
import React, { useState, useContext } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import productStore from '../store/productsStore';
import { Product } from '../interfaces/product';
import { Category } from '../interfaces/category';
import { observer } from 'mobx-react-lite';


const ItemForm: React.FC = observer(() => {
	const [name, setName] = useState('');
	console.log(productStore.categories);

	const [category, setCategory] = useState<Category>({ id: '', name: '' });

	const handleAddItem = () => {
		if (name.trim()) {
			const product: Product = { name: name, category: category.name, quantity: 1 }
			productStore.addItem(product);
			setName('');
		}
	};

	return (
		<div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
			<TextField
				label="מוצר"
				variant="outlined"
				value={name}
				onChange={(e) => setName(e.target.value)}
				margin="normal"
			/>


			<FormControl size="medium" variant='filled' margin="normal" style={{ width: '250px' }}>
				<InputLabel>קטגוריה</InputLabel>
				<Select
					key={category.id}
					value={category.name}
					onChange={(e) => setCategory({ name: e.target.value })}
					label="קטגוריה"
				>
					{productStore.categories.map(cat => (
						<MenuItem key={cat.id} value={cat.name}>{cat.name}</MenuItem>
					))}
				</Select>
			</FormControl>
			<Button variant="contained" color="primary" onClick={handleAddItem} style={{ borderRadius: '25px', height: '40px', width: '40px' }}>
				הוסף
			</Button>


		</div>
	);
});

export default ItemForm;
