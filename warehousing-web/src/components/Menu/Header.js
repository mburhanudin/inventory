import React, {useState, useEffect} from 'react'
import { Link, useHistory } from "react-router-dom";
import '../../assets/css/top-bottom-menu.css';

function Header() {
    const history = useHistory();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const handleLogout = (event) => {
        history.push(event.target.value)
    };


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">WAREHOUSE</a>
            <div className="navbar-end">
                <div className="navbar-item">
                    <button className="btn btn-secondary" onClick={() => history.push('/') }>Logout</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;