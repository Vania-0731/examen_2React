import { useState, useEffect } from "react";
import { diseños } from "../data/items"; 
export default function DisenoPreviewList() {
  const [listaDiseños, setListaDiseños] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListaDiseños(diseños);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  if (listaDiseños.length === 0)
    return (
      <div className="text-center p-5" style={{ color: "#EA4C89" }}>
        🎨 Cargando diseños...
      </div>
    );

  return (
    <div className="container py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="row g-4">
        {listaDiseños.slice(0, 6).map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4">
            <ItemCard
              item={item}
              favorites={[]} 
              onToggleFavorite={() => {}} 
              showFavoriteBtn={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
