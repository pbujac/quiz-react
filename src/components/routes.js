import Home from './Home';
import App from "./App";

const routes = {
    // base component (wrapper for the whole application).
    component: App,
    childRoutes: [

        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        }

    ]
};

export default routes;

// import Home from "./Home";
// import {Route} from "react-router";
// import * as React from "react";
// import App from "./App";
//
// export default (
//     <Route path="/" component={App}>
//         <IndexRoute component={Home}/>
//     </Route>
// );
