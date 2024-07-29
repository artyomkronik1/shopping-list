import React, { useContext } from 'react';
import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { CartContext } from '../context/context';
import productStore from '../store/productsStore';

const ProductsList: React.FC = observer(() => {
	const cartStore = useContext(CartContext);
	const categorizedItems = productStore.getItemsByCategory();


	return (
		<>

			<Typography variant="h6" style={{ display: 'flex', textAlign: 'center', color: '#0a66c2', width: '100%', justifyContent: 'center' }}>
				יש לאסוף מוצרים אלו במחלקות המתאימות
			</Typography>
			<div style={{ display: "flex", justifyContent: 'start', width: '100%', gap: '40px', marginTop: '40px', flexWrap: 'wrap' }}>
				{categorizedItems.map((categoryGroup, index) => {
					const totalQuantity = categoryGroup.items.reduce((sum, item) => sum + item.quantity, 0);
					return (
						<Box key={index} mb={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0eded', borderRadius: '15px', padding: '10px', border: '1px solid #0a66c2' }}>
							<Box display="flex" justifyContent="space-between" alignItems="center" borderBottom='1px solid #0a66c2'>
								<Typography variant="h6" style={{ fontWeight: 'bold', color: '#0a66c2' }}>
									{categoryGroup.category}
									{' - '}
									{totalQuantity > 1 ? totalQuantity + ' מוצרים ' : 'מוצר אחד'}
								</Typography>

							</Box>


							<List>
								{categoryGroup.items.map((item, itemIndex) => (
									<ListItem key={itemIndex}>
										<ListItemText style={{ color: '#0a66c2', textAlign: "center" }}
											primary={item.quantity > 1 ? `${item.name} (${item.quantity})` : item.name}
										/>
									</ListItem>
								))}
							</List>
						</Box>
					)
				})}
			</div >
		</>
	);
});

export default ProductsList;
