import styles from "./App.module.css"
import firebase from "./firebase";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { AddMovie } from "./components/AddMovie/AddMovie";
import { Contacts } from "./components/Contacts/Contacts";
import { Catalog } from "./components/Catalog/Catalog";



function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const ref = firebase.firestore().collection('movies');

  useEffect(() => {
      getMovies();
  }, []);

  if(loading) {
      return <div className={styles.LoadingDiv}>
      <img src="./images/m.jpg" alt="logo" width="250" height="250"/>
      </div>
  }

  function getMovies() {
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
              items.push(doc.data());
          });
          setMovies(items);
          setLoading(false)
      })
  }

  return (

    

    <div className={styles.Main}>
            <Header />

            <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog movies={movies}/>} />
            <Route path="/add-movie" element={<AddMovie />} />
            <Route path="/contacts" element={<Contacts />} />

            </Routes>

        
            <Footer />

    </div>
    
  )
    
}

export default App;
