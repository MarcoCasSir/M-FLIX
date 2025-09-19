import { peliculas } from "./datos";
import { pintarListaPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  pintarListaPeliculas(peliculas, { titulo: "Todas las películas" });
  pintarListaPeliculas(peliculas, {
    titulo: "Películas de Aventuras",
    filtro: { genero: "Aventuras", caracteristica: "genero" },
  });

  pintarListaPeliculas(peliculas, {
    titulo: "Películas Familiares",
    filtro: { genero: "Familiar", caracteristica: "genero" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Películas de Animación",
    filtro: { genero: "Animacion", caracteristica: "genero" },
  });
});
