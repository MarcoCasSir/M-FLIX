import { Pelicula, FiltroPeliculas, TipoGenero } from "./modelo";

export const filtrarPeliculasPorGenero = (
  peliculas: Pelicula[],
  genero?: TipoGenero
): Pelicula[] => peliculas.filter((pelicula) => pelicula.genero === genero);
// devuelve un array cuyo genero es igual al genero ("opcional" que le he pasado )

export const filtrarPeliculas = (
  peliculas: Pelicula[],
  filtro?: FiltroPeliculas
): Pelicula[] => {
  if (!filtro) return peliculas;
  switch (filtro.caracteristica) {
    case "genero":
      return filtrarPeliculasPorGenero(peliculas, filtro.genero);

    default:
      return peliculas;
  }
};
