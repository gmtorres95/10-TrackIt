import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import "./assets/css/reset.css";
import SignUp from "./pages/SignUp";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/cadastro" component={SignUp} />
                <Route exact path="/habitos" />
                <Route exact path="/hoje" />
                <Route exact path="/historico" />
            </Switch>
        </BrowserRouter>
    );
}