import { Link } from "react-router-dom"
import { useState } from "react"

function App() {

  const [menuToggle, setMenuToggle] = useState(false)

    const toggle = () => {
        setMenuToggle(current => !current);
    }

  return (
    <div className="App">
      <div>
        <section id="showcase" className={`${menuToggle ? "active" : ""}`}>
          <header>
            <h2 className="logo">Travel</h2>
            <div
              id="toggle"
              className={`${menuToggle ? "active" : ""}`}
              onClick={toggle}
            ></div>
          </header>
          <video src="/introVideo.mp4" muted loop autoPlay playsInline></video>
          <div className="overlay"></div>
          <div className="text">
            <h2>Never Stop </h2>
            <h3>Exploring The World</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="/">Explore</a>
          </div>
        </section>
        <div id="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Destinations</a>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>{" "}
        : ""
      </div>
    </div>
  );
}

export default App;
