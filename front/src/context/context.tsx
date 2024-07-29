import React from 'react';
import cartStore from '../store/productsStore';

export const CartContext = React.createContext(cartStore);

export const CartProvider: React.FC = ({ children }: any) => {
	return (
		<CartContext.Provider value={cartStore}>
			{children}
		</CartContext.Provider>
	);
};
