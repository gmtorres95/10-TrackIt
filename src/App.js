import "./assets/css/reset.css";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
    const [user, setUser] = useState({});

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <SignIn setUser={setUser} />
                </Route>
                <Route exact path="/cadastro" component={SignUp} />
                <Route exact path="/hoje" />
                <Route exact path="/habitos" />
                <Route exact path="/historico" />
            </Switch>
        </BrowserRouter>
    );
}