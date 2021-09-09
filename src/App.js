import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import "./assets/css/reset.css";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/cadastro" />
                <Route exact path="/habitos" />
                <Route exact path="/hoje" />
                <Route exact path="/historico" />
            </Switch>
        </BrowserRouter>
    );
}