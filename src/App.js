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
  return (
    <section>
      {products
        .filter((product) => Number(product.price.replace('$ ', '') > 1500))
        .map((product) => (
          <div>
            <h1>{product.name}</h1>
            <p>Price: {product.price}</p>
            <ul>
              {product.colors.map((item) => (
                <li style={{ backgroundColor: item, color: 'white' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </section>
  );
}

export default App;
