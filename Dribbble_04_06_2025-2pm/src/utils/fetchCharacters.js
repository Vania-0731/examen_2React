export async function fetchCharacters() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    return data.results;
  } catch (error) {1230
    console.error("Error al obtener personajes:", error);
    return [];
  }
}
