import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import NavBar from "./components/NavBar";
import TodosPage from "./pages/Todos/TodosPage";
import InfoPage from "./pages/Information/InfoPage";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <NavBar/>
                <div className="container">
                    <Switch>
                        <Route component={TodosPage} path={'/'} exact/>
                        <Route component={InfoPage} path={'/about'}/>
                    </Switch>
                </div>
        </BrowserRouter>
    );
}

export default App;
