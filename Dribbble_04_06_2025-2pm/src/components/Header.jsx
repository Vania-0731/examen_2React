import { Link } from "react-router-dom";

export default function Header() {
  const dribbbleRosa = "#EA4C89";
  const fondoClaro = "#f9f9f9";
  const textoOscuro = "#333";

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: fondoClaro, borderBottom: `2px solid ${dribbbleRosa}` }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: dribbbleRosa, fontWeight: "900", fontSize: "1.5rem" }}
        >
          DribbbleClone
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: dribbbleRosa }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(38%) sepia(69%) saturate(3176%) hue-rotate(316deg) brightness(92%) contrast(89%)" }}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { path: "/", label: "Inicio" },
              { path: "/items", label: "Diseños" },
              { path: "/contact", label: "Contacto" },
            ].map((link) => (
              <li className="nav-item" key={link.path}>
                <Link
                  className="nav-link"
                  to={link.path}
                  style={{
                    color: textoOscuro,
                    fontWeight: "600",
                    marginLeft: "1rem",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = dribbbleRosa)}
                  onMouseLeave={(e) => (e.target.style.color = textoOscuro)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
