import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import MainView from "./components/MainView";
import WelcomePage from "./components/WelcomePage";

function App() {




        return (
            <HashRouter>
                <>
                    <Navbar/>
                    <Switch>
                        <Route exact path={'/'} component={WelcomePage} />
                        <Route path={'/main'} component={MainView} />
                    </Switch>
                </>
            </HashRouter>
        );


}

export default App;
