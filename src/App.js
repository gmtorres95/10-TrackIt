import "./assets/css/reset.css";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Top from "./components/Top";
import UserContext from "./context/UserContext";

import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={user}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <SignIn setUser={setUser} />
                    </Route>
                    <Route exact path="/cadastro" component={SignUp} />
                    <Route exact path="/hoje" component={Top} />
                    <Route exact path="/habitos" />
                    <Route exact path="/historico" />
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    );
}