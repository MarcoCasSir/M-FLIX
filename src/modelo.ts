export interface Pelicula {
  titulo: string;
  resumen: string;
  genero: string;
  masVisto: boolean;
  calificacionImdb: number;
  premioGalardon: boolean;
  fechaEstreno: Date;
  imagen: string;
}

// este objecto filtro sirve para encapsular los parametros de busqueda
export interface FiltroPeliculas {
  genero?: TipoGenero;
  caracteristica: TipoCaracteristica;
}

//este objecto de configuracion
export interface ListaPeliculasConfiguracion {
  titulo: string;
  filtro?: FiltroPeliculas;
}

export type TipoFlecha = "izquierda" | "derecha";

export const nombreClases = {
  peliculas: "peliculas",
  listaPeliculas: "lista-peliculas",
  peliculasContenedor: "peliculas-contenedor",
  pelicula: "pelicula",
};

export type TipoCaracteristica = "genero";

export type TipoGenero = "Familiar" | "Aventuras" | "Animacion";
