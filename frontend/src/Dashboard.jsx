import { useState } from "react";

function Dashboard() {

  const [cart, setCart] = useState({
    masala: 0,
    adrak: 0,
    elaichi: 0,
    sulaimani: 0,
    green: 0,
    cold: 0,
  });


  // Add chai
  const addItem = (item) => {
    setCart({
      ...cart,
      [item]: cart[item] + 1,
    });
  };


  // Remove chai
  const removeItem = (item) => {
    if (cart[item] > 0) {
      setCart({
        ...cart,
        [item]: cart[item] - 1,
      });
    }
  };


  // Total number of items
  const cartCount =
    cart.masala +
    cart.adrak +
    cart.elaichi +
    cart.sulaimani +
    cart.green +
    cart.cold;


  // Subtotal
  const subtotal =
    cart.masala * 29 +
    cart.adrak * 29 +
    cart.elaichi * 29 +
    cart.sulaimani * 29 +
    cart.green * 29 +
    cart.cold * 39;


  // Delivery fee
  const deliveryFee = cartCount > 0 ? 15 : 0;


  // Final total
  const total = subtotal + deliveryFee;


  return (
    <main className="dashboard">


      {/* ================= SIDEBAR ================= */}

      <aside className="sidebar">

        <h2>
          ☕ Cutting<span>Chai</span>
        </h2>

        <nav>

          <a className="active">🏠 Home</a>

          <a>📖 Menu</a>

          <a>🛍️ Orders</a>

          <a>♡ Favorites</a>

          <a>🏷️ Offers</a>

          <a>💳 Payments</a>

          <a>👤 Profile</a>

        </nav>


        <a className="logout">
          ↪ Logout
        </a>


        {/* Chai Time Card */}

        <div className="chai-time-card">

          <h3>Chai Time</h3>

          <p>Is Anytime</p>

          <img
            src="/src/assets/chai-time.jpg"
            alt="Chai Time"
          />

        </div>

      </aside>



      {/* ================= MAIN CONTENT ================= */}

      <section className="main-content">


        {/* ================= TOP BAR ================= */}

        <div className="top-bar">


          <div className="location">

            <span>📍</span>

            <div>

              <small>Deliver to</small>

              <p>Connaught Place, New Delhi</p>

            </div>

          </div>



          <div className="search-box">

            <input
              type="text"
              placeholder="Search your favourite chai..."
            />

            <span>🔍</span>

          </div>



          <div className="profile-area">

            <span className="notification">
              🔔
            </span>

            <button className="profile">
              AS
            </button>

          </div>

        </div>



        {/* ================= WELCOME BANNER ================= */}

        <div className="welcome-banner">

          <img
            src="/src/assets/welcome-chai.jpg"
            alt="Chai"
            className="welcome-banner-img"
          />

          <div className="welcome-overlay"></div>


          <div className="welcome-text">

            <p>WELCOME BACK, AS 👋</p>

            <h1>Chai ho jaye ? ☕</h1>

            <span>
              garma garam chai, ab aapke darwaze par!
            </span>

            <button>
              Order Now <span>→</span>
            </button>

          </div>


          <div className="banner-dots">

            <span className="active"></span>

            <span></span>

            <span></span>

          </div>

        </div>



        {/* ================= CATEGORIES ================= */}

        <div className="categories-section">


          <div className="section-heading">

            <h2>
              Categories
            </h2>

            <span>
              View all
            </span>

          </div>



          <div className="category-list">


            <div className="category-card active">

              <div className="category-icon">
                ☕
              </div>

              <p>All Chai</p>

            </div>



            <div className="category-card">

              <div className="category-icon">
                🌸
              </div>

              <p>Masala Chai</p>

            </div>



            <div className="category-card">

              <div className="category-icon">
                🫚
              </div>

              <p>Adrak Chai</p>

            </div>



            <div className="category-card">

              <div className="category-icon">
                🌿
              </div>

              <p>Elaichi Chai</p>

            </div>



            <div className="category-card">

              <div className="category-icon">
                🍃
              </div>

              <p>Green Chai</p>

            </div>



            <div className="category-card">

              <div className="category-icon">
                🥃
              </div>

              <p>Sulaimani</p>

            </div>



            <div className="category-card">

              <div className="category-icon">
                🧊
              </div>

              <p>Cold Chai</p>

            </div>

          </div>

        </div>



        {/* ================= POPULAR + CART ================= */}

        <div className="dashboard-bottom">


          {/* ================= POPULAR CHAI ================= */}

          <div className="popular-section">


            <div className="section-heading">

              <h2>
                Popular Chai
              </h2>

              <span>
                View all
              </span>

            </div>



            <div className="chai-list">


              {/* MASALA CHAI */}

              <div className="chai-card">

                <div className="chai-image">

                  <img
                    src="/src/assets/masala-chai.jpg"
                    alt="Masala Chai"
                  />

                </div>

                <h3>Masala Chai</h3>

                <p>
                  Classic masala chai with perfect or spices.
                </p>

                <div className="chai-bottom">

                  <strong>₹29</strong>

                  <span>⭐ 4.8</span>

                  <button
                    onClick={() => addItem("masala")}
                  >
                    +
                  </button>

                </div>

              </div>



              {/* ADRAK CHAI */}

              <div className="chai-card">

                <div className="chai-image">

                  <img
                    src="/src/assets/adrak-chai.jpg"
                    alt="Adrak Chai"
                  />

                </div>

                <h3>Adrak Chai</h3>

                <p>
                  Strong and refreshing ginger chai.
                </p>

                <div className="chai-bottom">

                  <strong>₹29</strong>

                  <span>⭐ 4.7</span>

                  <button
                    onClick={() => addItem("adrak")}
                  >
                    +
                  </button>

                </div>

              </div>



              {/* ELAICHI CHAI */}

              <div className="chai-card">

                <div className="chai-image">

                  <img
                    src="/src/assets/elaichi-chai.jpg"
                    alt="Elaichi Chai"
                  />

                </div>

                <h3>Elaichi Chai</h3>

                <p>
                  Aromatic elaichi chai for your mood.
                </p>

                <div className="chai-bottom">

                  <strong>₹29</strong>

                  <span>⭐ 4.9</span>

                  <button
                    onClick={() => addItem("elaichi")}
                  >
                    +
                  </button>

                </div>

              </div>



              {/* SULAIMANI CHAI */}

              <div className="chai-card">

                <div className="chai-image">

                  <img
                    src="/src/assets/sulaimani-chai.jpg"
                    alt="Sulaimani Chai"
                  />

                </div>

                <h3>Sulaimani Chai</h3>

                <p>
                  Light, lemony and soothing chai.
                </p>

                <div className="chai-bottom">

                  <strong>₹29</strong>

                  <span>⭐ 4.6</span>

                  <button
                    onClick={() => addItem("sulaimani")}
                  >
                    +
                  </button>

                </div>

              </div>



              {/* GREEN CHAI */}

              <div className="chai-card">

                <div className="chai-image">

                  <img
                    src="/src/assets/green-chai.jpg"
                    alt="Green Chai"
                  />

                </div>

                <h3>Green Chai</h3>

                <p>
                  Healthy green tea with refreshing taste.
                </p>

                <div className="chai-bottom">

                  <strong>₹29</strong>

                  <span>⭐ 4.5</span>

                  <button
                    onClick={() => addItem("green")}
                  >
                    +
                  </button>

                </div>

              </div>



              {/* COLD CHAI */}

              <div className="chai-card">

                <div className="chai-image">

                  <img
                    src="/src/assets/cold-chai.jpg"
                    alt="Cold Chai"
                  />

                </div>

                <h3>Cold Chai</h3>

                <p>
                  Chilled and tasty summer delight.
                </p>

                <div className="chai-bottom">

                  <strong>₹39</strong>

                  <span>⭐ 4.7</span>

                  <button
                    onClick={() => addItem("cold")}
                  >
                    +
                  </button>

                </div>

              </div>


            </div>

          </div>



          {/* ================= CART ================= */}

          <div className="cart-box">


            <div className="cart-header">

              <h2>
                🛒 Your Cart
              </h2>

              <span>
                {cartCount} Items
              </span>

            </div>



            {/* MASALA CART */}

            {cart.masala > 0 && (

              <div className="cart-item">

                <div className="cart-product">

                  <img
                    src="/src/assets/masala-chai.jpg"
                    alt="Masala Chai"
                  />

                  <div>

                    <h4>Masala Chai</h4>

                    <span>₹29 each</span>

                  </div>

                </div>


                <div className="quantity">

                  <button
                    onClick={() => removeItem("masala")}
                  >
                    −
                  </button>

                  <span>
                    {cart.masala}
                  </span>

                  <button
                    onClick={() => addItem("masala")}
                  >
                    +
                  </button>

                </div>

              </div>

            )}



            {/* ADRAK CART */}

            {cart.adrak > 0 && (

              <div className="cart-item">

                <div className="cart-product">

                  <img
                    src="/src/assets/adrak-chai.jpg"
                    alt="Adrak Chai"
                  />

                  <div>

                    <h4>Adrak Chai</h4>

                    <span>₹29 each</span>

                  </div>

                </div>


                <div className="quantity">

                  <button
                    onClick={() => removeItem("adrak")}
                  >
                    −
                  </button>

                  <span>
                    {cart.adrak}
                  </span>

                  <button
                    onClick={() => addItem("adrak")}
                  >
                    +
                  </button>

                </div>

              </div>

            )}



            {/* ELAICHI CART */}

            {cart.elaichi > 0 && (

              <div className="cart-item">

                <div className="cart-product">

                  <img
                    src="/src/assets/elaichi-chai.jpg"
                    alt="Elaichi Chai"
                  />

                  <div>

                    <h4>Elaichi Chai</h4>

                    <span>₹29 each</span>

                  </div>

                </div>


                <div className="quantity">

                  <button
                    onClick={() => removeItem("elaichi")}
                  >
                    −
                  </button>

                  <span>
                    {cart.elaichi}
                  </span>

                  <button
                    onClick={() => addItem("elaichi")}
                  >
                    +
                  </button>

                </div>

              </div>

            )}



            {/* SULAIMANI CART */}

            {cart.sulaimani > 0 && (

              <div className="cart-item">

                <div className="cart-product">

                  <img
                    src="/src/assets/sulaimani-chai.jpg"
                    alt="Sulaimani Chai"
                  />

                  <div>

                    <h4>Sulaimani Chai</h4>

                    <span>₹29 each</span>

                  </div>

                </div>


                <div className="quantity">

                  <button
                    onClick={() => removeItem("sulaimani")}
                  >
                    −
                  </button>

                  <span>
                    {cart.sulaimani}
                  </span>

                  <button
                    onClick={() => addItem("sulaimani")}
                  >
                    +
                  </button>

                </div>

              </div>

            )}



            {/* GREEN CART */}

            {cart.green > 0 && (

              <div className="cart-item">

                <div className="cart-product">

                  <img
                    src="/src/assets/green-chai.jpg"
                    alt="Green Chai"
                  />

                  <div>

                    <h4>Green Chai</h4>

                    <span>₹29 each</span>

                  </div>

                </div>


                <div className="quantity">

                  <button
                    onClick={() => removeItem("green")}
                  >
                    −
                  </button>

                  <span>
                    {cart.green}
                  </span>

                  <button
                    onClick={() => addItem("green")}
                  >
                    +
                  </button>

                </div>

              </div>

            )}



            {/* COLD CART */}

            {cart.cold > 0 && (

              <div className="cart-item">

                <div className="cart-product">

                  <img
                    src="/src/assets/cold-chai.jpg"
                    alt="Cold Chai"
                  />

                  <div>

                    <h4>Cold Chai</h4>

                    <span>₹39 each</span>

                  </div>

                </div>


                <div className="quantity">

                  <button
                    onClick={() => removeItem("cold")}
                  >
                    −
                  </button>

                  <span>
                    {cart.cold}
                  </span>

                  <button
                    onClick={() => addItem("cold")}
                  >
                    +
                  </button>

                </div>

              </div>

            )}



            {/* EMPTY CART */}

            {cartCount === 0 && (

              <div className="empty-cart">

                <span>☕</span>

                <p>
                  Your cart is empty
                </p>

                <small>
                  Add your favourite chai
                </small>

              </div>

            )}



            {/* BILL */}

            <div className="cart-bill">

              <div>

                <span>Subtotal</span>

                <strong>
                  ₹{subtotal}
                </strong>

              </div>


              <div>

                <span>Delivery Fee</span>

                <strong>
                  ₹{deliveryFee}
                </strong>

              </div>


              <hr />


              <div className="total-row">

                <span>Total</span>

                <strong>
                  ₹{total}
                </strong>

              </div>

            </div>



            {/* PLACE ORDER */}

            <button className="place-order">
              Place Order →
            </button>


          </div>

        </div>



        {/* ================= OFFER ================= */}

        <div className="offer-banner">

          <div>

            <span>
              🎁 SPECIAL OFFER
            </span>

            <h3>
              Flat 20% OFF on your first order!
            </h3>

            <p>
              Use code WELCOME20 at checkout
            </p>

          </div>


          <button>
            Copy Code
          </button>

        </div>


      </section>

    </main>
  );
}

export default Dashboard;