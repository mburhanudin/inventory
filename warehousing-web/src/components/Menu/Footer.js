import React from 'react';
import '../../assets/css/top-bottom-menu.css';

function Footer() {
    return (
        <div>
            <hr/>
            <h6 className="copyright">Copyright &copy; {new Date().getFullYear()} - Warehouse X. All Rights Reserved.</h6>
        </div>
    )
}

export default Footer;