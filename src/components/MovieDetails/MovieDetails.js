import { useParams } from 'react-router';
import styles from './styles.module.css';
import { useContext, useEffect, useState } from 'react';
import { doc } from 'firebase/firestore'
import firebase from '../../firebase';
import { UserContext } from '../../contexts/AuthContext';

export const MovieDetails = () => {

    const { movieId } = useParams()
    const [movie, setMovie] = useState(null);
    const { isAuthenticated } = useContext(UserContext)

    useEffect(() => {
        const getMovie = async () => {
            try {
                const movieInfo = await firebase.firestore().collection('movies').doc(movieId).get();
                setMovie(movieInfo.data())
            } catch (error) {
                console.log(error)
            }
        }

        getMovie()
    }, [movieId]);

    

    if (!movie) {
        return <div className={styles.LoadingDiv}>
            <img src="./images/m.jpg" alt="logo" width="250" height="250" />
        </div>
    }

    const getYouTubeVideoId = (url) => {
        const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match;
      };

      const youtubeVideoId = getYouTubeVideoId(movie.trailerUrl);
    //   console.log(youtubeVideoId[1])

    return (
        <div className={styles.DetailsDiv}>
            <section className={styles.DetailsSection}>
                <div>
                    <img src={movie.imageUrl} alt="movie" height={350} width={260} />
                    <div className={styles.DetailsInfo}>
                        <h5>Title: <span>{movie.title}</span></h5>
                        <h5>Category: <span>{movie.category}</span></h5>
                        <h5>Type: <span>{movie.type}</span></h5>
                        <h5>Studio: <span>{movie.creator}</span></h5>
                        <h5>Year: <span>{movie.year}</span></h5>
                        <h5>Likes: <span>{movie.likes}</span></h5>
                        {isAuthenticated && (
                            <h5><button>Like</button></h5>
                        )}
                    </div>
                </div>
                
                <div className={styles.DetailsDescription}>
                    <p>{movie.description}</p>
                    <div className={styles.DetailsButtons}>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
                <div>
                    <iframe width="400" height="345" frameBorder={0} src={`https://www.youtube.com/embed/${youtubeVideoId[1]}`}></iframe>
                </div>


            </section>
        </div>
    )


}