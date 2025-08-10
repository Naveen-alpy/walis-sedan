console.log('Hello from walis-sedan!');
console.log('Server starting on port 3000...');

// Basic HTTP server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Walis Sedan Services - Luxury Limousine Rentals</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 15px;
        }

        /* Responsive container breakpoints */
        @media (max-width: 767px) {
          .container { max-width: 100%; }
        }
        @media (min-width: 768px) {
          .container { max-width: 720px; }
        }
        @media (min-width: 992px) {
          .container { max-width: 960px; }
        }
        @media (min-width: 1200px) {
          .container { max-width: 1170px; }
        }
        @media (min-width: 1600px) {
          .container { max-width: 1390px; }
        }

        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 15px 0;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          color: #D4AF37;
          font-size: 1.5rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .crown-icon {
          width: 30px;
          height: 30px;
          background: #D4AF37;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .contact-info {
          color: white;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .phone {
          background: #D4AF37;
          color: black;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          text-decoration: none;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${process.env.HERO_IMAGE || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTExODE4O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNzM3Mzc7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8L3N2Zz4K"}');
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-content {
          color: white;
          max-width: 600px;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #D4AF37;
          font-weight: 500;
        }

        .hero-stats {
          display: flex;
          gap: 30px;
          margin: 30px 0;
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .google-logo {
          width: 20px;
          height: 20px;
        }

        .star-rating {
          color: #D4AF37;
          font-size: 1.2rem;
        }

        .cta-button {
          background: #D4AF37;
          color: black;
          padding: 15px 30px;
          border: none;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          margin-top: 20px;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #B8941F;
          transform: translateY(-2px);
        }

        /* Booking Section */
        .booking-section {
          background: #D4AF37;
          padding: 40px 0;
        }

        .booking-container {
          background: white;
          border-radius: 15px;
          padding: 30px;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .booking-title {
          text-align: center;
          margin-bottom: 30px;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .vehicle-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .vehicle-card {
          border: 2px solid #f0f0f0;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .vehicle-card:hover {
          border-color: #D4AF37;
          transform: translateY(-5px);
        }

        .vehicle-card img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .booking-form {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          margin-bottom: 5px;
          font-weight: bold;
          color: #333;
        }

        .form-group input, .form-group select {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1rem;
        }

        .book-now-btn {
          background: #000;
          color: white;
          padding: 15px 40px;
          border: none;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          display: block;
        }

        /* Why Choose Us Section */
        .why-choose-us {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .section-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .text-content h2 {
          color: #D4AF37;
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .text-content h3 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
        }

        .text-content p {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .image-content {
          position: relative;
        }

        .limo-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 15px;
        }

        /* Luxury Limos Section */
        .luxury-limos {
          padding: 80px 0;
          background: #111;
          color: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 3rem;
          color: #D4AF37;
          margin-bottom: 20px;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #ccc;
        }

        .limo-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .limo-card {
          background: white;
          color: #333;
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .limo-card:hover {
          transform: translateY(-10px);
        }

        .limo-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .card-content {
          padding: 30px;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .card-subtitle {
          color: #D4AF37;
          margin-bottom: 15px;
        }

        .features {
          list-style: none;
          margin-bottom: 20px;
        }

        .features li {
          padding: 5px 0;
          color: #666;
        }

        .features li:before {
          content: "✓";
          color: #D4AF37;
          margin-right: 10px;
        }

        .price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #D4AF37;
          margin-bottom: 20px;
        }

        .book-btn {
          background: #D4AF37;
          color: black;
          padding: 12px 25px;
          border: none;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
        }

        /* Transportation Made Easy */
        .transportation-easy {
          padding: 80px 0;
          background: linear-gradient(135deg, #333, #111);
          color: white;
          text-align: center;
        }

        .transportation-easy h2 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .transportation-easy .luxury {
          color: #D4AF37;
        }

        .transportation-easy p {
          font-size: 1.2rem;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .vehicle-showcase {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .showcase-vehicle {
          width: 200px;
          height: 120px;
          background: #444;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D4AF37;
          font-size: 0.9rem;
        }

        /* Services Section */
        .services {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .services-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .services-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 15px;
        }

        .services-text h2 {
          color: #D4AF37;
          font-size: 1.8rem;
          margin-bottom: 10px;
        }

        .services-text h3 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 30px;
        }

        .service-item {
          text-align: center;
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: #D4AF37;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          font-size: 1.5rem;
        }

        .service-item h4 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .service-item p {
          color: #666;
          font-size: 0.9rem;
        }

        /* Reviews Section */
        .reviews {
          padding: 80px 0;
          background: #111;
          color: white;
        }

        .reviews-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
        }

        .reviews-title h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .reviews-rating {
          text-align: right;
        }

        .rating-score {
          font-size: 2rem;
          color: #D4AF37;
          font-weight: bold;
        }

        .rating-stars {
          color: #D4AF37;
          font-size: 1.5rem;
          margin: 10px 0;
        }

        .review-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .review-card {
          background: #222;
          padding: 30px;
          border-radius: 15px;
          border-left: 4px solid #D4AF37;
        }

        .review-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .reviewer-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #D4AF37;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: black;
        }

        .reviewer-info h4 {
          margin-bottom: 5px;
        }

        .reviewer-info .stars {
          color: #D4AF37;
        }

        /* Footer Booking */
        .footer-booking {
          padding: 60px 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDQwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMTExIi8+Cjwvc3ZnPgo=');
          background-size: cover;
          background-position: center;
          color: white;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.5rem; }
          .hero-subtitle { font-size: 1.2rem; }
          .section-content { grid-template-columns: 1fr; }
          .services-content { grid-template-columns: 1fr; }
          .reviews-header { flex-direction: column; text-align: center; gap: 20px; }
          .hero-stats { justify-content: center; }
          .contact-info { flex-direction: column; gap: 10px; }
          .header-content { flex-direction: column; gap: 15px; }
        }
      </style>
    </head>
    <body>
      <!-- Header -->
      <header class="header">
        <div class="container">
          <div class="header-content">
            <div class="logo">
              <div class="crown-icon">👑</div>
              WALIS SEDAN SERVICES
            </div>
            <div class="contact-info">
              <span>📧 BOOK ONLINE OR CALL</span>
              <a href="tel:587-701-3132" class="phone">587-701-3132</a>
            </div>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>LUXURY<br>LIMOUSINE</h1>
            <p class="hero-subtitle">RENTALS ACROSS CANADA</p>

            <div class="hero-stats">
              <div class="stat">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNEY0NkU1Ii8+Cjwvc3ZnPgo=" class="google-logo" alt="Google">
                <span>1378 reviews on</span>
              </div>
              <div class="stat">
                <span class="star-rating">★★★★★</span>
                <span>4.8 out of 5</span>
              </div>
            </div>

            <a href="#booking" class="cta-button">REQUEST A FREE QUOTE</a>
          </div>
        </div>
      </section>

      <!-- Booking Section -->
      <section id="booking" class="booking-section">
        <div class="container">
          <div class="booking-container">
            <h2 class="booking-title">RIDE YOUR WAY</h2>

            <div class="vehicle-options">
              <div class="vehicle-card">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U2VkYW48L3RleHQ+Cjwvc3ZnPgo=" alt="Sedan">
                <h3>Sedan</h3>
                <p>EXECUTIVE SEDAN</p>
              </div>

              <div class="vehicle-card">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U1VWPC90ZXh0Pgo8L3N2Zz4K" alt="SUV">
                <h3>SUV</h3>
                <p>LUXURY SUV</p>
              </div>

              <div class="vehicle-card">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TGltbzwvdGV4dD4KPHN2Zz4K" alt="Limousine">
                <h3>Limousine</h3>
                <p>STRETCH LIMOUSINE</p>
              </div>
            </div>

            <form class="booking-form">
              <div class="form-group">
                <label>📍 PICKUP LOCATION</label>
                <input type="text" placeholder="Enter pickup location">
              </div>
              <div class="form-group">
                <label>📍 DROP-OFF DESTINATION</label>
                <input type="text" placeholder="Enter destination">
              </div>
              <div class="form-group">
                <label>📅 DATE</label>
                <input type="date">
              </div>
              <div class="form-group">
                <label>🕐 TIME</label>
                <input type="time">
              </div>
            </form>

            <button class="book-now-btn">BOOK NOW</button>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="why-choose-us">
        <div class="container">
          <div class="section-content">
            <div class="text-content">
              <h2>WHY RENT WITH</h2>
              <h3>WALIS SEDAN SERVICES</h3>
              <p>Experience the pinnacle of luxury transportation with our premium fleet and professional chauffeurs. We provide unmatched comfort, reliability, and style for all your special occasions and business needs.</p>
              <a href="#booking" class="cta-button">GET STARTED TODAY</a>
            </div>
            <div class="image-content">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkx1eHVyeSBMaW1vPC90ZXh0Pgo8L3N2Zz4K" alt="Luxury Limousine" class="limo-image">
            </div>
          </div>
        </div>
      </section>

      <!-- Luxury Limos -->
      <section class="luxury-limos">
        <div class="container">
          <div class="section-header">
            <h2>LUXURY LIMOS</h2>
            <p>Experience the ultimate elegance with our handpicked fleet of luxury limousines designed for the world's most exclusive destinations and unforgettable events.</p>
          </div>

          <div class="limo-cards">
            <div class="limo-card">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMTExIi8+Cjx0ZXh0IHg9IjE3NSIgeT0iMTI1IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV4ZWN1dGl2ZSBTZWRhbjwvdGV4dD4KPHN2Zz4K" alt="Executive Sedan">
              <div class="card-content">
                <h3 class="card-title">SPECIALTY CAR RENTALS</h3>
                <p class="card-subtitle">CORPORATE RATES 20% OFF</p>
                <ul class="features">
                  <li>Professional chauffeur service</li>
                  <li>Luxury interior amenities</li>
                  <li>Airport transfers</li>
                  <li>Corporate events</li>
                </ul>
                <div class="price">Starting at $89/hr</div>
                <button class="book-btn">BOOK NOW</button>
              </div>
            </div>

            <div class="limo-card">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMTExIi8+Cjx0ZXh0IHg9IjE3NSIgeT0iMTI1IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkx1eHVyeSBTVVY8L3RleHQ+Cjwvc3ZnPgo=" alt="Luxury SUV">
              <div class="card-content">
                <h3 class="card-title">SUV LIMO</h3>
                <p class="card-subtitle">DISCOUNTED 15% OFF FOR 6+ HOUR BOOKINGS</p>
                <ul class="features">
                  <li>Spacious for up to 8 passengers</li>
                  <li>Premium sound system</li>
                  <li>Climate control</li>
                  <li>Wedding packages</li>
                </ul>
                <div class="price">Starting at $129/hr</div>
                <button class="book-btn">BOOK NOW</button>
              </div>
            </div>

            <div class="limo-card">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMTExIi8+Cjx0ZXh0IHg9IjE3NSIgeT0iMTI1IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV4dGVuZGVkIExpbW88L3RleHQ+Cjwvc3ZnPgo=" alt="Extended Limousine">
              <div class="card-content">
                <h3 class="card-title">EXTENDED AND SPECIAL</h3>
                <p class="card-subtitle">CORPORATE SEDAN TRANSPORTATION FROM AIRPORT</p>
                <ul class="features">
                  <li>Extended wheelbase luxury</li>
                  <li>Bar and entertainment system</li>
                  <li>Privacy partition</li>
                  <li>Special events</li>
                </ul>
                <div class="price">Starting at $199/hr</div>
                <button class="book-btn">BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Transportation Made Easy -->
      <section class="transportation-easy">
        <div class="container">
          <h2><span class="luxury">LUXURY</span> TRANSPORTATION<br>MADE EASY</h2>
          <p>Enjoy a memorable ride with our quality vehicles and exceptional service. Whether it's for business or pleasure, we make your journey extraordinary.</p>

          <div class="vehicle-showcase">
            <div class="showcase-vehicle">Executive Sedan</div>
            <div class="showcase-vehicle">Luxury SUV</div>
            <div class="showcase-vehicle">Stretch Limo</div>
            <div class="showcase-vehicle">Party Bus</div>
          </div>

          <a href="#booking" class="cta-button">BOOK A FREE QUOTE</a>
        </div>
      </section>

      <!-- Services -->
      <section class="services">
        <div class="container">
          <div class="services-content">
            <div>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjUwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk91ciBUZWFtPC90ZXh0Pgo8L3N2Zz4K" alt="Our Team" class="services-image">
            </div>
            <div class="services-text">
              <h2>OUR LIMOUSINE</h2>
              <h3>RENTAL SERVICES</h3>
              <p>Professional transportation services for every occasion. Our experienced team and luxury fleet ensure your journey is comfortable, safe, and memorable.</p>

              <div class="services-grid">
                <div class="service-item">
                  <div class="service-icon">🚗</div>
                  <h4>AIRPORT TRANSFERS</h4>
                  <p>Reliable and punctual airport pickup and drop-off services</p>
                </div>

                <div class="service-item">
                  <div class="service-icon">💼</div>
                  <h4>CORPORATE EVENTS</h4>
                  <p>Professional transportation for business meetings and events</p>
                </div>

                <div class="service-item">
                  <div class="service-icon">💒</div>
                  <h4>SPECIAL OCCASIONS</h4>
                  <p>Weddings, proms, and other special celebration transport</p>
                </div>

                <div class="service-item">
                  <div class="service-icon">🎉</div>
                  <h4>PARTY & EVENTS</h4>
                  <p>Group transportation for parties and entertainment events</p>
                </div>
              </div>

              <a href="#booking" class="cta-button">REQUEST A FREE QUOTE</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Reviews -->
      <section class="reviews">
        <div class="container">
          <div class="reviews-header">
            <div class="reviews-title">
              <h2>RECENT REVIEW &<br>RATING</h2>
            </div>
            <div class="reviews-rating">
              <div class="rating-score">4.8</div>
              <div class="rating-stars">★★★★★</div>
              <p>1378 reviews on Google</p>
            </div>
          </div>

          <div class="review-cards">
            <div class="review-card">
              <div class="review-header">
                <div class="reviewer-avatar">JS</div>
                <div class="reviewer-info">
                  <h4>John Smith</h4>
                  <div class="stars">★★★★★</div>
                </div>
              </div>
              <p>"Exceptional service! The limousine was immaculate and our chauffeur was professional and courteous. Made our wedding day perfect!"</p>
            </div>

            <div class="review-card">
              <div class="review-header">
                <div class="reviewer-avatar">MJ</div>
                <div class="reviewer-info">
                  <h4>Maria Johnson</h4>
                  <div class="stars">★★★★★</div>
                </div>
              </div>
              <p>"Outstanding experience from start to finish. Punctual, luxury vehicle, and excellent customer service. Highly recommend for corporate events!"</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer Booking -->
      <section class="footer-booking">
        <div class="container">
          <div class="booking-container">
            <h2 class="booking-title">RIDE YOUR WAY</h2>
            <p style="text-align: center; margin-bottom: 30px; color: #666;">Book your luxury transportation experience today</p>

            <div class="vehicle-options">
              <div class="vehicle-card">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U2VkYW48L3RleHQ+Cjwvc3ZnPgo=" alt="Sedan">
                <h3>Executive Sedan</h3>
              </div>

              <div class="vehicle-card">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+U1VWPC90ZXh0Pgo8L3N2Zz4K" alt="SUV">
                <h3>Luxury SUV</h3>
              </div>

              <div class="vehicle-card">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TGltbzwvdGV4dD4KPHN2Zz4K" alt="Limousine">
                <h3>Stretch Limousine</h3>
              </div>
            </div>

            <form class="booking-form">
              <div class="form-group">
                <input type="text" placeholder="📍 Enter pickup location">
              </div>
              <div class="form-group">
                <input type="text" placeholder="📍 Enter your destination">
              </div>
            </form>

            <button class="book-now-btn">BOOK NOW</button>
          </div>
        </div>
      </section>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
