import { notifyFavorite } from "../utils/notifyFavorite";

function ItemCard({
  item,
  favorites = [],
  onToggleFavorite,
  showFavoriteBtn = true,
}) {
  const isFavorite = favorites.includes(item.id);

  const handleToggleFavorite = () => {
    const action = isFavorite ? "remove" : "add";
    onToggleFavorite(item.id);
    notifyFavorite(action, item.titulo);
  };

  const rosaDribbble = "#EA4C89";
  const fondo = "#FFFFFF";
  const textoPrincipal = "#333333";
  const textoSecundario = "#666666";

  return (
    <div
      className="card h-100 shadow-sm"
      style={{
        border: `1px solid #f3f3f3`,
        borderRadius: "0.75rem",
        backgroundColor: fondo,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={item.imagen}
        className="card-img-top"
        alt={item.titulo}
        style={{
          height: "220px",
          objectFit: "cover",
          borderTopLeftRadius: "0.75rem",
          borderTopRightRadius: "0.75rem",
        }}
      />
      <div className="card-body d-flex flex-column p-3">
        <h5
          className="card-title text-truncate mb-1"
          title={item.titulo}
          style={{ color: textoPrincipal, fontWeight: "600" }}
        >
          {item.titulo}
        </h5>

        <p
          className="card-text mb-1 text-truncate"
          title={`Diseñador: ${item.diseñador}`}
          style={{ color: textoSecundario, fontSize: "0.9rem" }}
        >
          👤 {item.diseñador}
        </p>

        <p
          className="card-text mb-2"
          style={{ color: textoSecundario, fontSize: "0.85rem" }}
        >
          ❤️ {item.likes} likes
        </p>

        <div
          className="mb-3"
          style={{
            fontSize: "0.8rem",
            overflowX: "auto",
            whiteSpace: "nowrap",
            color: textoSecundario,
          }}
        >
          {item.etiquetas.map((tag, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                backgroundColor: "#FDE6EF",
                color: rosaDribbble,
                padding: "0.25rem 0.6rem",
                borderRadius: "999px",
                marginRight: "0.4rem",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {showFavoriteBtn && (
          <button
            aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            onClick={handleToggleFavorite}
            className="btn mt-auto"
            style={{
              backgroundColor: isFavorite ? rosaDribbble : "transparent",
              color: isFavorite ? fondo : rosaDribbble,
              fontWeight: "600",
              border: `1px solid ${rosaDribbble}`,
              borderRadius: "0.5rem",
              transition: "all 0.3s ease",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            {isFavorite ? "♥ Favorito" : "♡ Agregar a favoritos"}
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
