import "./assets/css/reset.css";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Top from "./components/Top";
import Menu from "./components/Menu";
import Habits from "./pages/Habits";
import Today from "./pages/Today";
import History from "./pages/History";

import UserContext from "./context/UserContext";
import ProgressContext from "./context/ProgressContext";

import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
    const [user, setUser] = useState({});
    const [progress, setProgress] = useState(0);
    const [numberOfHabits, setNumberOfHabits] = useState(0);
    const [numberOfHabitsDone, setNumberOfHabitsDone] = useState(0);

    function saveUser(resp) {
        setUser(resp);
        localStorage.setItem("id", resp.id);
        localStorage.setItem("image", resp.image);
        localStorage.setItem("name", resp.name);
        localStorage.setItem("token", resp.token);
    }

    return (
        <UserContext.Provider value={{user, setUser, saveUser}}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/cadastro" component={SignUp} />
                    <ProgressContext.Provider value={{
                        progress,
                        setProgress,
                        numberOfHabits,
                        setNumberOfHabits,
                        numberOfHabitsDone,
                        setNumberOfHabitsDone
                    }}>
                        <Top />
                        <Menu />
                        <Route exact path="/hoje" component={Today} />
                        <Route exact path="/habitos" component={Habits} />
                        <Route exact path="/historico" component={History} />
                    </ProgressContext.Provider>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    );
}