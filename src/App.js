import React from 'react';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    price: '$ 2000',
    colors: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    name: 'Laptop',
    price: '$ 3000',
    colors: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    name: 'Tablet',
    price: '$ 1500',
    colors: ['#365069', '#47c1c8', '#f95786'],
  },
];

function App() {
  //filtering prices > than 1500
  const items = products.filter(
    ({ price }) => Number(price.replace('$ ', '')) > 1500,
  );

  return <section></section>;
}

export default App;
