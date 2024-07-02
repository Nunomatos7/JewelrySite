import React, { useState } from 'react';
import './Shop.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import shop1 from '../images/shop-1.jpg';
import shop2 from '../images/shop-2.jpg';
import shop3 from '../images/shop-3.jpg';
import shop4 from '../images/shop-4.jpg';
import shop5 from '../images/shop-5.jpg';
import shop6 from '../images/shop-6.jpg';

const productsData = [
  { id: 1, name: 'Air Plants', image: shop1, rating: 4, price: 49.99 },
  { id: 2, name: 'Cartoon Pillow', image: shop2, rating: 3, price: 69.99 },
  { id: 3, name: 'Cutting Board', image: shop4, rating: 2, price: 29.99 },
  { id: 4, name: 'Designer Headphones', image: shop5, rating: 4, price: 99.99 },
  { id: 5, name: 'Earth Friendly Bag', image: shop6, rating: 5, price: 119.99 },
  { id: 6, name: 'Purple Chair', image: shop3, rating: 5, price: 89.99 },
  { id: 7, name: 'Simple Vase', image: shop1, rating: 4, price: 199.99 },
  { id: 8, name: 'Wooden Table', image: shop2, rating: 3, price: 41.99 },
];

function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct.quantity === 1) {
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <section>
      <div className="shop-heading">
        <h2>Shop Now</h2>
      </div>
      <div className="shop-container">
        <div className="catalog">
          {productsData.map((product) => (
            <div className="product" key={product.id}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="add-to-cart" onClick={() => addToCart(product)}>
                  <AddShoppingCartIcon />
                </div>
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  {Array.from({ length: 5 }, (v, i) => (
                    <span key={i} className={i < product.rating ? 'star filled' : 'star'}>★</span>
                  ))}
                </div>
                <div className="product-price">€{product.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="shopping-cart">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <span>{item.name} x {item.quantity}</span> - <span>€{(item.price * item.quantity).toFixed(2)}</span>
                  <div className="cart-item-actions">
                    <AddShoppingCartIcon
                      className="adjust-cart add-unit"
                      onClick={() => addToCart(item)}
                    />
                    <RemoveShoppingCartIcon
                      className="adjust-cart remove-unit"
                      onClick={() => removeFromCart(item)}
                    />
                  </div>
                </div>
              ))}
              <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Shop;
