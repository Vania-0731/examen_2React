import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingSkeleton({ count = 8 }) {
  return (
    <div className="row">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0">
            <Skeleton height={250} /> {/* Imagen */}
            <div className="card-body">
              <h5 className="card-title">
                <Skeleton width={`80%`} />
              </h5>
              <Skeleton width={`60%`} height={20} className="mb-2" />
              <Skeleton count={3} className="mb-1" />
              <Skeleton width={120} height={36} /> {/* Botón */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
