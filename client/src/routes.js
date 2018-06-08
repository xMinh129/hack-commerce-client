import Base from './components/Main/Base.jsx';
import HomePage from './components/Main/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import Items from './components/Items/AllItems.jsx';
import Auth from './modules/Auth';



const routes = {
    // base component (wrapper for the whole application).
    component: Base,
    childRoutes: [

        {
            path: '/',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, DashboardPage);
                } else {
                    callback(null, HomePage);
                }
            }
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
            component: Items

        }

    ]
};

export default routes;
