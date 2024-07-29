import React, { useContext } from 'react';
import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { CartContext } from '../context/context';
import productStore from '../store/productsStore';

const ItemList: React.FC = observer(() => {
	const cartStore = useContext(CartContext);
	const categorizedItems = productStore.getItemsByCategory();


	return (
		<>
			<Typography variant="h6" style={{ display: 'flex', justifyContent: 'center', color: 'blue' }}>
				יש לאסוף מוצרים אלו במחלקות המתאימות
			</Typography>
			<div style={{ display: "flex", justifyContent: 'start', width: '100%', gap: '80px', marginTop: '30px' }}>
				{categorizedItems.map((categoryGroup, index) => {
					const totalQuantity = categoryGroup.items.reduce((sum, item) => sum + item.quantity, 0);
					return (
						<Box key={index} mb={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Box display="flex" justifyContent="space-between" alignItems="center" borderBottom='1px solid black'>
								<Typography variant="h6">
									{categoryGroup.category} {' - ' + totalQuantity} {totalQuantity > 1 ? 'מוצרים' : 'מוצר'}
								</Typography>

							</Box>


							<List>
								{categoryGroup.items.map((item, itemIndex) => (
									<ListItem key={itemIndex}>
										<ListItemText
											primary={item.quantity > 1 ? `${item.name} (${item.quantity})` : item.name}
										/>
									</ListItem>
								))}
							</List>
						</Box>
					)
				})}
			</div>
		</>
	);
});

export default ItemList;
