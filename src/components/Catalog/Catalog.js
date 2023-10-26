import styles from './styles.module.css'


import React from "react"
import { CatalogMovie } from "./CatalogMovie/CatalogMovie"


export const Catalog = ({ movies }) => {


    return (
        <section className={styles.CatalogSection}>
            <h1 className={styles.h1Catalog}>All Movies and Series Posts</h1>
            <section className={styles.MoviesCatalog}>
            {movies.map(x => <CatalogMovie key={movies.id} {...x} />)}
            </section>
            {movies.length === 0 && (
                <h3 className='no-movies'>No posts yet</h3>
            )}
        </section>
    )
}

