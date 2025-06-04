import { useEffect, useState } from "react";
import { diseños } from "../data/items"; // cambiar a diseños
import { useDebounce } from "../hooks/useDebounce";
import ItemList from "./ItemList";
import LoadingSkeleton from "./LoadingSkeleton";
import FavoriteList from "./FavoriteList";

export default function DisenoSearch() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("fav-items");
    return stored ? JSON.parse(stored) : [];
  });

  const debouncedSearchTerm = useDebounce(inputValue, 300);

  useEffect(() => {
    setTimeout(() => {
      // Evitar duplicados por id, si acaso
      const uniqueItems = Array.from(
        new Map(diseños.map(item => [item.id, item])).values()
      );
      setItems(uniqueItems);
      setLoading(false);
    }, 300);
  }, []);

  const handleToggleFavorite = (id) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    updatedFavorites = Array.from(new Set(updatedFavorites));
    setFavorites(updatedFavorites);
    localStorage.setItem("fav-items", JSON.stringify(updatedFavorites));
  };

  return (
    <div
      className="container py-4"
      style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}
    >
      <input
        type="text"
        className="form-control mb-4"
        placeholder="🔍 Buscar diseño por título..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          backgroundColor: "white",
          color: "#333",
          border: "1px solid #EA4C89",
          borderRadius: "0.5rem",
          padding: "0.5rem 1rem",
          fontWeight: "500",
        }}
      />

      {loading ? (
        <LoadingSkeleton count={8} />
      ) : (
        <>
          {favorites.length > 0 && (
            <FavoriteList
              items={items}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          )}

          <ItemList
            items={items}
            searchTerm={debouncedSearchTerm}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </>
      )}
    </div>
  );
}
