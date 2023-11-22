import { useState } from 'react'
import styles from './AddMovie.module.css'
import { UserAuth } from "../../contexts/AuthContext";


export const AddMovie = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [category, setCategory] = useState('');
    const [creator, setCreator] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [trailer, setTrailer] = useState('');
    
    const { user } = UserAuth();

    const movie = {
        title,
        year,
        category,
        creator,
        description,
        image,
        trailer,
        ownerId: user.uid,
        likes: 0
    };

    function onSubmit (movie) {
        fetch('https://softuni-project-5b6eb-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then((res) => {
            console.log(`${res} :D`)
        })
    }

    return (
        <div className={styles.AddMovieDiv}>

        <section className={styles.MovieSection}>
            <div className={styles.AddMovieText}>Add Movie/Tv-Series</div>

            <form className="form-horizontal" onSubmit={onSubmit}>
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
                            <input className="form-control" placeholder="Image Link" name="movie-image" value={image} onChange={(e) => setImage(e.target.value)}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-trailer">Trailer Url:</label>
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Trailer Link" name="movie-trailer" value={trailer} onChange={(e) => setTrailer(e.target.value)}/>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="singlebutton"></label>
                        <div className="col-md-4">
                            <button id="singlebutton" name="singlebutton" className="btn btn-primary" type="submit">Add</button>
                        </div>
                    </div>

                </fieldset>
            </form>

        </section>
        </div>
    )
}