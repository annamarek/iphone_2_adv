import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <div className="product-card">
      {/* Badge */}
      <div className="badge">
        Новинка <span>🔥</span>
      </div>

      {/* Product Image */}
      <div className="image-container">
        <img
          className="product-image"
          src="https://img.jabko.ua/image/cache/catalog/products/2025/09/101332/CosmicOrange-1397x1397.png.webp"
          alt="Apple iPhone 17 Pro Max in Cosmic Orange"
        />
      </div>

      {/* Dots */}
      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      {/* Rating */}
      <div className="rating">★☆☆☆☆ <span>(0)</span></div>

      {/* Colors */}
      <div className="colors">
        <span className="color black"></span>
        <span className="color gray"></span>
        <span className="color orange"></span>
      </div>

      {/* Title */}
      <h3 className="title">
        Apple iPhone 17 Pro Max 256GB (Cosmic Orange)
      </h3>

      {/* Button */}
      <div className="button-container">
        <button className="preorder-btn">Предзаказ</button>
      </div>
    </div>

  )
}

export default App
