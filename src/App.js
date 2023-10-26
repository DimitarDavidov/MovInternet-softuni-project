import styles from "./App.module.css"

import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className={styles.Main}>
            <Header />

            <Routes>

            <Route path="/" element={<Home />} />

            </Routes>

        
            <Footer />

    </div>
    
  )
    
}

export default App;
