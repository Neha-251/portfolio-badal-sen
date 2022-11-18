import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">BSen</div>
        <div className="container">
          <button className="item">
            About
            <div className="under"></div>
          </button>
          <button className="item">
            Exprtise
            <div className="under"></div>
          </button>
          <button className="item">
            Contact Me
            <div className="under"></div>
          </button>
        </div>
      </nav>
      <div className="spacediv"></div>
    </>
  );
};
