import Base from './components/Main/Base.jsx';
import HomePage from './components/Main/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import ItemList from './components/Items/ItemList.jsx';
import Auth from './modules/Auth';
import SimpleCard from './components/Items/SimpleCard.jsx'
import Checkout from './components/Main/Checkout.jsx';
import FindProductButton from './components/Main/FindProductButton.jsx';


const routes = {
        // base component (wrapper for the whole application).
        component: Base,
        childRoutes: [
            {
                path: '/',
                component: FindProductButton
            },
            {
                path: '/login',
                component: LoginPage
            },
            {
                path: '/logout',
                onEnter: (nextState, replace) => {
                    Auth.deauthenticateUser();

                // change the current URL to /
                    replace('/');
                }
            },
            {
                path: '/items',
                component: ItemList,
                update: Base.incrementCartSize
            }
            ,
            {
                path: '/checkout',
                component: Checkout
            }

        ]
    }
;

export default routes;
