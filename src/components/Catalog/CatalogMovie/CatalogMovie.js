import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import React from "react"


export const CatalogMovie = ({
    id,
    title,
    year,
    category,
    studio,
    imageUrl,
    trailerUrl,
    movieDescription,
    episodes,
    type,

}) => {
    return (
        <div className={styles.Movie}>
            <div key={id}>
                <img src={imageUrl} alt="movie" height={350} width={260} />
                <h5>Title: {title}</h5>
                <h5>Category: {category}</h5>
                <h5>Type: {type}</h5>
                <Link to={`/catalog/${id}`} className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Details</Link>
                {/* <video src={movie.trailerUrl} width="600" height="300" controls="controls" autoPlay='true'></video> */}
                {/* <iframe
                    width='200'
                    height='200'
                    src={trailerUrl}
                    title="Trailer"
                    frameBorder='0'
                    allowFullScreen={true}
                    Works!
                /> */}
            </div>
        </div>
    )
}

