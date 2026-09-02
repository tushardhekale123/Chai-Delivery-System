import { useState } from "react";
import Dashboard from "./Dashboard";
import "./App.css";

const chaiMoments = [
  ["🥺", "Had a bad day? Have a", "kadak masala chai"],
  ["😤", "Pissed off by the landlord?", "Have an adrak chai"],
  ["😵‍💫", "Nervous about the", "presentation? Have elaichi chai"],
  ["😌", "Still cannot figure out?", "Have Sulaimani chai"],
];

function App() {

  const [started, setStarted] = useState(false);

  if (started) {
    return <Dashboard />;
  }

  return (
    <main className="chai-page">

      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />
      <div className="orb orb-four" />

      <section className="hero-card">

        <nav className="navbar">

          <a className="brand" href="#home">
            Cutting<span>Chai</span>
          </a>

          <div className="nav-links">
            <a className="active" href="#intro">
              Intro
            </a>

            <a href="#process">
              Process
            </a>

            <a href="#flavours">
              Flavours
            </a>

            <a href="#places">
              Places
            </a>
          </div>

          <button
            className="profile"
            aria-label="Open profile"
          >
            <span>AS</span>
          </button>

        </nav>

        <div className="hero-content">

          <div className="copy">

            <p className="eyebrow">
              THE COMFORT CUP
            </p>

            <h1>
              Masala <span>Chai</span>
            </h1>

            <p className="description">
              Let's dive in the essence of authentic Indian
              Masala chai, a desi way to brighten your mood.
            </p>

            <button 
              className="order-button"
              
              onClick={() => setStarted(true)}
              >
               Order now <span>→</span>
           
            </button>

          </div>

          <div className="tea-visual">

            <div className="sun-glow" />

            <img
              src="/tea.jpg"
              alt="Masala Chai"
            />

          </div>

          <aside className="chai-moods">

            {chaiMoments.map(
              ([emoji, lineOne, lineTwo]) => (
                <div
                  className="mood"
                  key={lineOne}
                >
                  <span className="emoji">
                    {emoji}
                  </span>

                  <p>
                    {lineOne}
                    <br />
                    {lineTwo}
                  </p>
                </div>
              )
            )}

          </aside>

        </div>

        <div className="table-rings" />

      </section>
      

    </main>
  );
}


export default App;