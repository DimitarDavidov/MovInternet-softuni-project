import { Link } from "react-router-dom";
import styles from './styles.module.css'
import { useContext } from "react";
import { UserContext } from "../../contexts/AuthContext";

export const Header = () => {

  const {isAuthenticated } = useContext(UserContext);
  console.log(isAuthenticated)
  return (
    <div>
      <nav className={styles.NavigationBar}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand" ><img src="./images/m.jpg" alt="logo" width="30" height="30"/></Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active" ><Link to="/">Home <span className="glyphicon glyphicon-home"></span></Link></li>
              <li><Link to="/catalog">Catalog <span className="glyphicon glyphicon-list-alt"></span></Link></li>
              {isAuthenticated && (
              <li><Link to="/add-movie">Add a movie <span className="glyphicon glyphicon-film"></span></Link></li>
              )}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/about"><span className="glyphicon glyphicon-info-sign"></span> About</Link></li>
              <li><Link to="/contacts"><span className="glyphicon glyphicon-phone-alt"></span> Contacts</Link></li>
              <li><Link to="/faq"><span className="glyphicon glyphicon-question-sign"></span> FAQ</Link></li>
              {isAuthenticated && (
                <li><Link to="/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</Link></li>
              )}
              {!isAuthenticated && (
                <>
                <li><Link to="/register"><span className="glyphicon glyphicon-log-in"></span> Register</Link></li>
                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}