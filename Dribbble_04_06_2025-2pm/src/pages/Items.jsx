import PeliculaSearch from "../components/ItemSearch";

export default function Items() {
  return (
    <>
      <div
        className="container py-4"
        style={{ backgroundColor: "#F5F7FA", minHeight: "80vh" }}
      >
        <h1
          className="mb-4"
          style={{ color: "black", fontWeight: "700", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >
          Todo tipo de películas o series
        </h1>
        <PeliculaSearch />
      </div>
    </>
  );
}
