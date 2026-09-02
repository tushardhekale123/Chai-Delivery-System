function Dashboard() {
  return (
    <main className="dashboard">

      <aside className="sidebar">

        <h2>☕ Cutting<span>Chai</span></h2>

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

      </section>
    </main>
  );
}

export default Dashboard;