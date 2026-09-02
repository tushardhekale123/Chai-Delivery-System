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

    </main>
  );
}

export default Dashboard;