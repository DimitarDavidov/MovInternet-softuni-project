import styles from './AddMovie.module.css'


export const AddMovie = () => {
    return (
        <div className={styles.AddMovieDiv}>

        <section className={styles.MovieSection}>
            <div className={styles.AddMovieText}>Add Movie/Tv-Series</div>

            <form className="form-horizontal">
                <fieldset>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-title">Title:</label>
                        <div className="col-md-4">
                            <input name="movie-title" placeholder="Shrek" className="form-control input-md" type="text" />

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-year">Year:</label>
                        <div className="col-md-4">
                            <input name="movie-year" placeholder="2001" className="form-control input-md" type="text" />

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-category">Category:</label>
                        <div className="col-md-4">
                            <input name="movie-category" placeholder="Adventure/Comedy" className="form-control input-md" type="text" />

                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="made-by">Made by:</label>
                        <div className="col-md-4">
                            <input name="movie-creator" placeholder="Dream Works" className="form-control input-md" type="text" />

                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-description">Description</label>
                        <div className="col-md-4">
                            <textarea className="form-control" placeholder="Fun movie to watch with your family!" name="movie-description"></textarea>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-image">Image</label>
                        <div className="col-md-4">
                            <textarea className="form-control" placeholder="Image Link" name="movie-image"></textarea>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="movie-trailer">Trailer Url:</label>
                        <div className="col-md-4">
                            <textarea className="form-control" placeholder="Trailer Link" name="movie-trailer"></textarea>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="singlebutton"></label>
                        <div className="col-md-4">
                            <button id="singlebutton" name="singlebutton" className="btn btn-primary">Add</button>
                        </div>
                    </div>

                </fieldset>
            </form>

        </section>
        </div>
    )
}