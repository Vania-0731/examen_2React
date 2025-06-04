import { useEffect, useRef } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function CarouselBanner({
  items,
  title = "Destacados",
  linkText = "Ver todos",
  linkUrl = "/items",
}) {
  const carouselRef = useRef(null);
  const carouselInstance = useRef(null);

  // Colores estilo Dribbble
  const dribbbleRosa = "#EA4C89";
  const fondoClaro = "#f9f9f9";
  const textoOscuro = "#333";

  useEffect(() => {
    if (carouselRef.current) {
      carouselInstance.current = new bootstrap.Carousel(carouselRef.current, {
        interval: 4000,
        pause: "hover",
        ride: "carousel",
      });

      const pauseCarousel = () => carouselInstance.current.pause();

      const controls = carouselRef.current.querySelectorAll(
        ".carousel-control-prev, .carousel-control-next"
      );
      controls.forEach((control) => control.addEventListener("click", pauseCarousel));

      return () => {
        controls.forEach((control) =>
          control.removeEventListener("click", pauseCarousel)
        );
        carouselInstance.current.dispose();
      };
    }
  }, [items]);

  if (!items || items.length === 0)
    return (
      <div
        className="text-center p-5"
        style={{ color: dribbbleRosa, backgroundColor: fondoClaro }}
      >
        Cargando {title.toLowerCase()}...
      </div>
    );

  return (
    <section style={{ backgroundColor: fondoClaro, color: textoOscuro }} className="py-5">
      <div className="container">
        <h1
          className="text-center mb-4"
          style={{ color: dribbbleRosa, fontWeight: "700" }}
        >
          Descubre nuestros {title.toLowerCase()}
        </h1>
        <div
          id="carouselExample"
          ref={carouselRef}
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div
            className="carousel-inner rounded shadow-sm"
            style={{ backgroundColor: "white" }}
          >
            {items.slice(0, 5).map((item, index) => (
              <div
                key={item.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={item.imagen}
                  className="d-block mx-auto rounded"
                  alt={item.titulo || ""}
                  style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
                />
                <div
                  className="carousel-caption d-none d-md-block rounded p-3"
                  style={{
                    backgroundColor: dribbbleRosa,
                    color: "white",
                    opacity: 0.85,
                    bottom: "15px",
                    left: "15px",
                    right: "15px",
                    textAlign: "left",
                  }}
                >
                  <h5 style={{ fontWeight: "700" }}>{item.titulo}</h5>
                  <p style={{ marginBottom: "0.25rem" }}>👩‍🎨 {item.disenador}</p>
                  <p style={{ marginBottom: 0 }}>❤️ {item.likes} Likes</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <a
              href={linkUrl}
              className="btn"
              style={{
                backgroundColor: dribbbleRosa,
                color: "white",
                fontWeight: "700",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.4rem",
                transition: "background-color 0.3s ease",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c2396f")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = dribbbleRosa)}
            >
              {linkText}
            </a>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
            style={{
              filter: "invert(30%) sepia(70%) saturate(300%) hue-rotate(320deg) brightness(90%) contrast(85%)",
              width: "3rem",
              height: "3rem",
            }}
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
            style={{
              filter: "invert(30%) sepia(70%) saturate(300%) hue-rotate(320deg) brightness(90%) contrast(85%)",
              width: "3rem",
              height: "3rem",
            }}
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </section>
  );
}
