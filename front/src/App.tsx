// src/App.tsx
import React from 'react';
import ItemForm from './components/ProductComponent';
import ItemList from './components/ProductsList';
import CompleteOrderButton from './components/CompleteOrederButton';
import { Container, Typography, Box } from '@mui/material';
import MainComponent from './components/MainComponent';

const App: React.FC = () => {
  return (
    <MainComponent />
  );
};

export default App;
