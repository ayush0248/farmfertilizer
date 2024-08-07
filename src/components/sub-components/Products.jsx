import React from 'react';
import '../../styles/sub-style/Products.css';

const productsData = [
  {
    name: 'Organic Fertilizer A',
    description: 'High-quality organic fertilizer suitable for various crops.',
    image: '/assets/organic-fertilizer-a.jpg', // Ensure you have this image in the correct directory
    price: '$25'
  },
  {
    name: 'Organic Fertilizer B',
    description: 'Improves soil health and increases crop yield.',
    image: '/assets/organic-fertilizer-b.jpg', // Ensure you have this image in the correct directory
    price: '$30'
  },
  {
    name: 'Organic Pesticide',
    description: 'Effective organic pesticide to protect crops from pests.',
    image: '/assets/organic-pesticide.jpg', // Ensure you have this image in the correct directory
    price: '$20'
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="products-container">
        {productsData.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
