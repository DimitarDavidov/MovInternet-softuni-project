import firebase from "./firebase";

import styles from "./App.module.css"

import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Contacts } from "./components/Contacts/Contacts";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AddMovie } from "./components/AddMovie/AddMovie";
import { useEffect, useState } from "react";
import { Catalog } from "./components/Catalog/Catalog";
import { AuthContextProvider } from "./contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Logout } from "./components/Logout/Logout";

function App() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    
    // const handleLogout = async () => {
    //     try {
    //         await logout();
    //         navigate('/');
    //         console.log('You are logout')
    //     }catch (e){
    //         console.log(e.message)
    //     }
    // }
    
    useEffect(() => {
        getMovies();
    }, []);

    if(loading) {
        return <div className={styles.LoadingDiv}>
        <img src="./images/m.jpg" alt="logo" width="250" height="250"/>
        </div>
    }
    const ref = firebase.firestore().collection('movies');

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
        <AuthContextProvider>
        <div className={styles.Main}>
            <Header />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/add-movie" element={<AddMovie />} />
                <Route path="/catalog" element={<Catalog movies={movies}/>} />
            </Routes>
            <Footer />

        </div>
        </AuthContextProvider>

    );
}

export default App;
