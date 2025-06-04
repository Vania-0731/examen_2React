import ItemCard from "./ItemCard";

export default function FavoriteList({ items = [], favorites = [], onToggleFavorite }) {
  // Filtrar solo las plantillas que están en favoritos
  const favoriteItems = items.filter(item => favorites.includes(item.id));
  
  if (favoriteItems.length === 0) {
    return null; // No mostrar nada si no hay favoritos
  }

  return (
    <div className="mb-5">
      <h3 className="mb-3" style = {{color: "white"}}>❤️ Mis Plantillas Favoritas</h3>
      <div className="row">
        {favoriteItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <ItemCard
              item={item}
              favorites={favorites}
              onToggleFavorite={onToggleFavorite}
            />
          </div>
        ))}
      </div>
      <hr className="my-4" />
    </div>
  );
}
