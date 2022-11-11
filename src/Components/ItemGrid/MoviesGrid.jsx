import { useEffect } from "react";
import movies from "../movies.json"
import { MovieCard } from "../../containers/ItemListContainer/MovieCard";
import styles from "./MoviesGrid.module.css"


export function MoviesGrid() {
        return (
      
        <ul className={styles.moviesGrid}>
            {movies.map((movie) =>

<MovieCard key ={movie.id} movie={movie}/>
            )
            }
        </ul>

    )
}