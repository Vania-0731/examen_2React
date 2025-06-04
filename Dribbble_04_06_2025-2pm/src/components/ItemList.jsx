import ItemCard from "./ItemCard";

export default function ItemList({
  items,
  searchTerm = "",
  favorites = [],
  onToggleFavorite,
}) {
  const filteredItems = items.filter((item) => {
    if (!searchTerm) return true;
    return (
      item &&
      typeof item.titulo === "string" &&
      item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (filteredItems.length === 0) {
    return (
      <div className="text-center mt-4">
        <p className="text-muted">
          {searchTerm
            ? "No se encontraron diseños que coincidan con tu búsqueda."
            : "No hay diseños para mostrar."}
        </p>
      </div>
    );
  }

  return (
    <div className="row">
      {filteredItems.map((item) => (
        <div key={item.id} className="col-12 col-sm-6 col-md-4 mb-4">
          <ItemCard
            item={item}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
            showDescription={false}  
            showFavoriteBtn={true}
          />
        </div>
      ))}
    </div>
  );
}
