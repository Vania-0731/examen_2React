import { useState } from "react";

export default function ContactForm() {
  // Colores Dribbble
  const dribbbleRosa = "#EA4C89";
  const fondoClaro = "#f9f9f9";
  const textoOscuro = "#333";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado con éxito!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
      <div className="mb-3">
        <label
          className="form-label"
          style={{ color: dribbbleRosa, fontWeight: "600" }}
        >
          Nombres y Apellidos
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            borderColor: dribbbleRosa,
            backgroundColor: "white",
            color: textoOscuro,
          }}
        />
      </div>

      <div className="mb-3">
        <label
          className="form-label"
          style={{ color: dribbbleRosa, fontWeight: "600" }}
        >
          Correo electrónico*
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            borderColor: dribbbleRosa,
            backgroundColor: "white",
            color: textoOscuro,
          }}
        />
      </div>

      <div className="mb-3">
        <label
          className="form-label"
          style={{ color: dribbbleRosa, fontWeight: "600" }}
        >
          Mensaje*
        </label>
        <textarea
          name="message"
          className="form-control"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          style={{
            borderColor: dribbbleRosa,
            backgroundColor: "white",
            color: textoOscuro,
          }}
        />
      </div>

      <button
        type="submit"
        className="btn"
        style={{
          backgroundColor: dribbbleRosa,
          color: "white",
          fontWeight: "700",
          width: "100%",
          borderRadius: "0.4rem",
          border: "none",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c33a70")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = dribbbleRosa)}
      >
        Enviar
      </button>
    </form>
  );
}
