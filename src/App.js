import "./assets/css/reset.css";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Top from "./components/Top";
import Menu from "./components/Menu";
import Habits from "./pages/Habits";
import History from "./pages/History";

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
                    <>
                        <Top />
                        <Menu />
                        <Route exact path="/hoje" />
                        <Route exact path="/habitos" component={Habits}/>
                        <Route exact path="/historico" component={History} />
                    </>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    );
}