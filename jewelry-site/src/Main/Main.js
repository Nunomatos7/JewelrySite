import './Main.css';
import React, {useState} from 'react';
import heroImage from '../images/hero.png';
import shop1 from '../images/shop1.jpg';
import shop2 from '../images/shop2.jpg';
import itemImage1 from '../images/home-shop1.jpg';
import itemImage2 from '../images/home-shop2.jpg';
import bannerImage from '../images/banner.jpg';

function Main() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="home">
      <section className="hero">
        <img src={heroImage} alt="Jewelry Banner" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to JewelryBrand</h1>
          <p>Discover the finest jewelry collections crafted with precision and love.</p>
          <a href="/about">
            <button className="shop-button">See More</button>
          </a>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-item">
          <img src={shop1} alt="Gallery 1" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src={shop2} alt="Gallery 2" className="gallery-image" />
        </div>
      </section>

      <section className="products">
        <div className="products-column">
          <h2>New Arrivals</h2>
          <button className="shop-button">Shop All</button>
        </div>
        <div className="products-column">
          <div className="product" onClick={() => openModal(itemImage1)}>
            <img src={itemImage1} alt="Item 1" className="product-image" />
            <div className="product-overlay">
              <span className="plus-icon">+</span>
            </div>
          </div>
          <p>Beautiful Necklace</p>
        </div>
        <div className="products-column">
          <div className="product" onClick={() => openModal(itemImage2)}>
            <img src={itemImage2} alt="Item 2" className="product-image" />
            <div className="product-overlay">
              <span className="plus-icon">+</span>
            </div>
          </div>
          <p>Elegant Earrings</p>
        </div>
      </section>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <img src={modalImage} alt="Full Screen" className="modal-image" />
        </div>
      )}


      <section className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <div className="banner-text">
          <h2>Comming Soon</h2>
          <p>Summer Sale Starting Soon!!!</p>
          <a href="/" className="banner-button">Subscribe for access</a>
        </div>
      </section>

      <section className="contact">
        <div className="contact-content">
          <h2>Need Help?</h2>
          <p>Get in touch with us for any inquiries or assistance.</p>
          <a href="/contact" className="contact-button">Contact Us</a>
        </div>
      </section>

    </div>

    
  );
}

export default Main;
