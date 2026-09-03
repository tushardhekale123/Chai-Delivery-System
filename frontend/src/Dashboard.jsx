import { useState } from "react";
function Dashboard() {

  const [cart, setCart] = useState({
    masala: 0,
    adrak: 0,
    elaichi: 0,
  });

  const addItem = (item) => {
    setCart({
      ...cart,
      [item]: cart[item] + 1,
    });
  };

  const removeItem = (item) => {
    if (cart[item] > 0) {
      setCart({
        ...cart,
        [item]: cart[item] - 1,
      });
    }
  };

  const cartCount =
    cart.masala + cart.adrak + cart.elaichi;

  const subtotal = cartCount * 29;

  const deliveryFee = cartCount > 0 ? 15 : 0;

  const total = subtotal + deliveryFee;

  return (
    <main className="dashboard">

      {/* Sidebar */}
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

        <a className="logout"> ↪ Logout </a>

        <div className="chai-time-card">
        <h3>Chai Time</h3>
        <p>Is Anytime</p>

        <img
        src="/src/assets/chai-time.jpg"
        alt="Chai Time" />
        </div>
      
       </aside>

      {/* Main Content */}
      <section className="main-content">

        {/* Top Bar */}
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


        {/* Welcome Banner */}
<div className="welcome-banner">

  <img
    src="/src/assets/welcome-chai.jpg" alt="Chai"
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


        {/* Categories */}
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
              <div className="category-icon">☕</div>
              <p>All Chai</p>
            </div>

            <div className="category-card">
              <div className="category-icon">🌸</div>
              <p>Masala Chai</p>
            </div>

            <div className="category-card">
              <div className="category-icon">🫚</div>
              <p>Adrak Chai</p>
            </div>

            <div className="category-card">
              <div className="category-icon">🌿</div>
              <p>Elaichi Chai</p>
            </div>

            <div className="category-card">
              <div className="category-icon">🍃</div>
              <p>Green Chai</p>
            </div>

            <div className="category-card">
              <div className="category-icon">🥃</div>
              <p>Sulaimani</p>
            </div>

            <div className="category-card">
              <div className="category-icon">🧊</div>
              <p>Cold Chai</p>
            </div>

          </div>

        </div>


        {/* Dashboard Bottom Area */}
        <div className="dashboard-bottom">


          {/* Popular Chai */}
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


              {/* Masala Chai */}
              <div className="chai-card">

                <div className="chai-image">

                  <img
                    src="/src/assets/masala-chai.jpg"
                    alt="Masala Chai"
                  />

                </div>

                <h3>
                  Masala Chai
                </h3>

                <p>
                  Classic masala chai with perfect blend of spices.
                </p>


                <div className="chai-bottom">

                  <strong>
                    ₹29
                  </strong>

                  <span>
                    ⭐ 4.8
                  </span>

                  <button
                    onClick={() => addItem("masala")}
                  >
                    +
                  </button>

                </div>

              </div>


              {/* Adrak Chai */}
              <div className="chai-card">

                <div className="chai-image">

                  <img
                    src="/src/assets/adrak-chai.jpg"
                    alt="Adrak Chai"
                  />

                </div>

                <h3>
                  Adrak Chai
                </h3>

                <p>
                  Strong and refreshing ginger chai.
                </p>


                <div className="chai-bottom">

                  <strong>
                    ₹29
                  </strong>

                  <span>
                    ⭐ 4.7
                  </span>

                  <button
                    onClick={() => addItem("adrak")}
                  >
                    +
                  </button>

                </div>

              </div>


              {/* Elaichi Chai */}
              <div className="chai-card">

                <div className="chai-image">

                  <img
                    src="/src/assets/elaichi-chai.jpg"
                    alt="Elaichi Chai"
                  />

                </div>

                <h3>
                  Elaichi Chai
                </h3>

                <p>
                  Aromatic elaichi chai for your mood.
                </p>


                <div className="chai-bottom">

                  <strong>
                    ₹29
                  </strong>

                  <span>
                    ⭐ 4.9
                  </span>

                  <button
                    onClick={() => addItem("elaichi")}
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

          </div>


          {/* Cart */}
          <div className="cart-box">

            <div className="cart-header">

              <h2>
                🛒 Your Cart
              </h2>

              <span>
                {cartCount} Items
              </span>

            </div>


            {/* Masala Cart Item */}
            {cart.masala > 0 && (

              <div className="cart-item">

                <div>
                  <h4>Masala Chai</h4>
                  <span>₹29 each</span>
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


            {/* Adrak Cart Item */}
            {cart.adrak > 0 && (

              <div className="cart-item">

                <div>
                  <h4>Adrak Chai</h4>
                  <span>₹29 each</span>
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


            {/* Elaichi Cart Item */}
            {cart.elaichi > 0 && (

              <div className="cart-item">

                <div>
                  <h4>Elaichi Chai</h4>
                  <span>₹29 each</span>
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


            {/* Empty Cart */}
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


            {/* Bill */}
            <div className="cart-bill">

              <div>
                <span>Subtotal</span>
                <strong>₹{subtotal}</strong>
              </div>

              <div>
                <span>Delivery Fee</span>
                <strong>₹{deliveryFee}</strong>
              </div>

              <hr />

              <div className="total-row">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>

            </div>


            {/* Place Order */}
            <button className="place-order">
              Place Order →
            </button>

          </div>

        </div>


        {/* Offer */}
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