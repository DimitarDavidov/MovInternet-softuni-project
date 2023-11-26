import { useParams } from 'react-router';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import {doc} from 'firebase/firestore'
import firebase from '../../firebase';

export const MovieDetails = () => {

const {movieId} = useParams()
const [movie, setMovie] = useState(null);

useEffect(() => {
    const getMovie = async () => {
        try {
            const movieInfo = await firebase.firestore().collection('movies').doc(movieId).get();
            setMovie(movieInfo.data())
        }catch (error) {
            console.log(error)
        }
    }

    getMovie()
}, [movieId])

if (!movie) {
    return <div className={styles.LoadingDiv}>
    <img src="./images/m.jpg" alt="logo" width="250" height="250"/>
    </div>
  }

return (
    <div className={styles.DetailsDiv}>
        <section className={styles.DetailsSection}>
            <div className={styles.DetailsImage}>
            <img src={movie.imageUrl} alt="movie" height={350} width={260} />
            </div>
            <div className={styles.DetailsInfo}>
            <h5>Title: {movie.title}</h5>
            <h5>Category: {movie.category}</h5>
            <h5>Type: {movie.type}</h5>
            <h5>Studio: {movie.studio}</h5>
            <h5>Year: {movie.year}</h5>
            </div>
            <div className={styles.DetailsDescription}>
                <p>{movie.description}</p>
            </div>
            <div className={styles.DetailsButtons}>
            <button>Edit</button>
            <button>Delete</button>
            </div>
        </section>
    </div>
)


}