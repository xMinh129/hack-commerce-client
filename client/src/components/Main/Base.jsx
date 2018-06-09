import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Auth from '../../modules/Auth';
import SimpleCard from '../Items/SimpleCard.jsx'
import MediaCard from '../Items/MediaCard.jsx'
import { withTheme } from '@material-ui/core/styles'
import ItemList from '../Items/ItemList.jsx'
import Cart from "../Items/Cart.jsx"

const styles = {
    navbar: {
        display: 'inline-block',
        color: 'yellow',
        marginLeft: '5px',
        marginRight: '5px'
    },
};

const Base = ({children}) => (

    <div>
        <header id='header'>
            <h1>
                <a href='#'>
                    Coripurse
                    <abbr></abbr>
                </a>
            </h1>

            {Auth.isUserAuthenticated() ? (
                <div style={{float: 'right', width: '500px'}}>
                    <p style={styles.navbar}>
                        <i className="fa fa-user user-icon" aria-hidden="true"></i>
                        {Auth.getUserData().d.EmailAddress}
                    </p>
                    <p style={styles.navbar}><Link to="/logout">Log out</Link></p>

                    <p style={styles.navbar}><Link to="/checkout">Check out</Link></p>

                </div>

            ) : (
                <div id='notifications'>
                    <p className="nav navbar-left-link"><Link to="/login">Log in</Link></p>
                    <p className="nav"><Link to="/signup">Register</Link></p>
                </div>
            )}

        </header>

        <Cart cartSize={Auth.getCartSize()}></Cart>


        {children}


        <footer className='footer'>
            Coripurse - Making payment simple
        </footer>

    </div>

);

Base.propTypes = {
    children: PropTypes.object.isRequired
};

export default Base;
