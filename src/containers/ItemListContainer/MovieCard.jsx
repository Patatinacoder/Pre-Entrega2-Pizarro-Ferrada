import styles from "./MovieCard.module.css"
import { Link } from "react-router-dom";

export function MovieCard({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
    <li className={styles.movieCard} >
     
     
       <Link to={"/item/:id" + movie.id}>


    <img width={230} 
        height={345}
        className={styles.movieImage} src={imageUrl} alt="" />
        <div>{movie.title}</div>
        </Link>
    </li>

    )
}