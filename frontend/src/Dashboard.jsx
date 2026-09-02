function Dashboard() {
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

        <a className="logout">↪ Logout</a>

      </aside>


      {/* Main Content */}
      <section className="main-content">

        {/* Top Bar */}
        <div className="top-bar">

          {/* Location */}
          <div className="location">
            <span>📍</span>

            <div>
              <small>Deliver to</small>
              <p>Connaught Place, New Delhi</p>
            </div>
          </div>


          {/* Search */}
          <div className="search-box">

            <input
              type="text"
              placeholder="Search your favourite chai..."
            />

            <span>🔍</span>

          </div>


          {/* Right Side */}
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

          <div className="welcome-text">

            <p>WELCOME BACK, AS 👋</p>

            <h1>
              Chai ho jaye? ☕
            </h1>

            <span>
              Garma garam chai, ab aapke darwaze par!
            </span>

            <button>
              Order Now →
            </button>

          </div>


          <div className="welcome-chai">
            ☕
          </div>

        </div>


        {/* Categories */}
        <div className="categories-section">

          <div className="section-heading">
            <h2>Categories</h2>
            <span>View all</span>
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


        {/* Popular Chai */}
        <div className="popular-section">

          <div className="section-heading">
            <h2>Popular Chai</h2>
            <span>View all</span>
          </div>

          <div className="chai-list">

            <div className="chai-card">

              <div className="chai-image">
                <img src="/src/assets/masala-chai.jpg" alt="Masala Chai" />
              </div>

              <h3>Masala Chai</h3>

              <p>
                Classic masala chai with perfect blend of spices.
              </p>

              <div className="chai-bottom">
                <strong>₹29</strong>
                <span>⭐ 4.8</span>
                <button>+</button>
              </div>

            </div>


            <div className="chai-card">

              <div className="chai-image">
                ☕
              </div>

              <h3>Adrak Chai</h3>

              <p>
                Strong and refreshing ginger chai.
              </p>

              <div className="chai-bottom">
                <strong>₹29</strong>
                <span>⭐ 4.7</span>
                <button>+</button>
              </div>

            </div>


            <div className="chai-card">

              <div className="chai-image">
                ☕
              </div>

              <h3>Elaichi Chai</h3>

              <p>
                Aromatic elaichi chai for your mood.
              </p>

              <div className="chai-bottom">
                <strong>₹29</strong>
                <span>⭐ 4.9</span>
                <button>+</button>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Dashboard;