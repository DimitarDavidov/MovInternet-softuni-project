import styles from './styles.module.css'
import firebase from '../../firebase';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export const EditMovie = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [category, setCategory] = useState('');
    const [creator, setCreator] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImage] = useState('');
    const [trailerUrl, setTrailer] = useState('');
    const [type, setType] = useState('');

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

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

    return (
        <div className={styles.EditMovieDiv}>

        <section className={styles.MovieSection}>
            <div className={styles.EditMovieText}>Edit Movie/Tv-Series</div>

            <form className="form-horizontal">
                <fieldset>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-title">Title:</label>
                        <div className="col-md-4">
                            <input name="movie-title" placeholder="Shrek" className="form-control input-md" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-year">Year:</label>
                        <div className="col-md-4">
                            <input name="movie-year" placeholder="2001" className="form-control input-md" type="text" value={year} onChange={(e) => setYear(e.target.value)}/>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-title">Type:</label>
                        <div className="col-md-4">
                            <input name="movie-type" placeholder="Movie" className="form-control input-md" type="text" value={type} onChange={(e) => setType(e.target.value)}/>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-category">Category:</label>
                        <div className="col-md-4">
                            <input name="movie-category" placeholder="Adventure/Comedy" className="form-control input-md" type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>

                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="made-by">Made by:</label>
                        <div className="col-md-4">
                            <input name="movie-creator" placeholder="Dream Works" className="form-control input-md" type="text" value={creator} onChange={(e) => setCreator(e.target.value)}/>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-description">Description</label>
                        <div className="col-md-4">
                            <textarea className="form-control" placeholder="Fun movie to watch with your family!" name="movie-description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-image">Image</label>
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Image Link" name="movie-image" value={imageUrl} onChange={(e) => setImage(e.target.value)}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-trailer">Trailer Url:</label>
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Trailer Link" name="movie-trailer" value={trailerUrl} onChange={(e) => setTrailer(e.target.value)}/>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="singlebutton"></label>
                        <div className="col-md-4">
                            <button id="singlebutton" name="singlebutton" className="btn btn-primary">Edit Movie</button>
                        </div>
                    </div>

                </fieldset>
            </form>

        </section>
        </div>
    )
}