import styles from './styles.module.css'
import firebase from '../../firebase';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserAuth } from '../../contexts/AuthContext';

export const EditMovie = () => {

const { movieId } = useParams();
const [movie, setMovie] = useState(null);
const {user} = UserAuth()


const [title, setTitle] = useState('');
const [year, setYear] = useState('');
const [category, setCategory] = useState('');
const [creator, setCreator] = useState('');
const [description, setDescription] = useState('');
const [imageUrl, setImage] = useState('');
const [trailerUrl, setTrailer] = useState('');
const [type, setType] = useState('');
const [ownerId, setOwnerId] = useState(''); 
const [hasError, setHasError] = useState(false);
const [error, setError] = useState('')

const navigate = useNavigate();


    useEffect(() => {
        const getMovie = async () => {
          try {
            const movieInfo = await firebase.firestore().collection('movies').doc(movieId).get();
            setMovie(movieInfo.data());
            setTitle(movieInfo.data()?.title);
            setYear(movieInfo.data()?.year);
            setCategory(movieInfo.data()?.category);
            setCreator(movieInfo.data()?.creator);
            setDescription(movieInfo.data()?.description);
            setImage(movieInfo.data()?.imageUrl);
            setTrailer(movieInfo.data()?.trailerUrl);
            setType(movieInfo.data()?.type);
            setOwnerId(movieInfo.data()?.ownerId);
          } catch (error) {
            console.log(error);
          }
        };
    
        getMovie();
      }, [movieId]);

    //   console.log(ownerId)
    //   console.log(user.uid)
      if(ownerId !== user.uid) {
        return navigate('/')
      }

      const handleEditMovie = async (e) => {
        e.preventDefault();
    
        const editedMovie = {
          title,
          year,
          category,
          creator,
          description,
          type,
          imageUrl,
          trailerUrl,
        };
    
        try {
            if (title.trim() === '' || year.trim() === '' || category.trim() === '' || creator.trim === '' || description.trim() === '' || type.trim() === '' || imageUrl.trim() === '' || trailerUrl.trim() === ''){
                throw new Error('Fields should not be empty!')
            }
          const movieRef = firebase.firestore().collection('movies').doc(movieId);
          await movieRef.update(editedMovie);
          navigate('/');
        } catch (error) {
            //TODO: Error Handeling
          console.error('Error:', error);
          setHasError(true);
          setError(error);
        }
      };

    return (
        <div className={styles.EditMovieDiv}>

        <section className={styles.MovieSection}>
            <div className={styles.EditMovieText}>Edit Movie/Tv-Series</div>
            {hasError && (
                <div class="alert alert-danger">
                <strong>The movie was not added!</strong> {error.message}</div>
            )}
            <form className="form-horizontal" onSubmit={handleEditMovie}>
                <fieldset>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-title">Title:</label>
                        <div className="col-md-4">
                            <input name="movie-title" className="form-control input-md" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-year">Year:</label>
                        <div className="col-md-4">
                            <input name="movie-year" className="form-control input-md" type="text" value={year} onChange={(e) => setYear(e.target.value)}/>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-title">Type:</label>
                        <div className="col-md-4">
                            <input name="movie-type" className="form-control input-md" type="text" value={type} onChange={(e) => setType(e.target.value)}/>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-category">Category:</label>
                        <div className="col-md-4">
                            <input name="movie-category" className="form-control input-md" type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>

                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="made-by">Made by:</label>
                        <div className="col-md-4">
                            <input name="movie-creator" className="form-control input-md" type="text" value={creator} onChange={(e) => setCreator(e.target.value)}/>

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-description">Description</label>
                        <div className="col-md-4">
                            <textarea className="form-control" name="movie-description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-image">Image</label>
                        <div className="col-md-4">
                            <input className="form-control" name="movie-image" value={imageUrl} onChange={(e) => setImage(e.target.value)}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-trailer">Trailer Url:</label>
                        <div className="col-md-4">
                            <input className="form-control" name="movie-trailer" value={trailerUrl} onChange={(e) => setTrailer(e.target.value)}/>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="singlebutton"></label>
                        <div className="col-md-4">
                            <button id="singlebutton" name="singlebutton" className="btn btn-primary" type="submit">Edit Movie</button>
                        </div>
                    </div>

                </fieldset>
            </form>

        </section>
        </div>
    )
}