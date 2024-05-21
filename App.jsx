import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import ProductList from './ProductList'

function App() {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App
