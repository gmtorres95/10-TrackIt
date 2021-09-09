import logo from "../assets/img/logo-1.png";
import { LoginBody, Input, Button } from "../components/styled/login";

import Loading from "../components/Loading";

import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignIn({ setUser }) {
    const [email, setEmail] = useState("gabriel@torres.com");
    const [password, setPassword] = useState("12345");
    const history = useHistory();
    const [button, setButton] = useState(true);

    function signIn() {
        setButton(false);
        const body = {email, password};
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
        .then(resp => {
            setUser(resp.data)
            history.push("/hoje");
        })
        .catch(err => {
            alert(err);
            setButton(true);
        })
    }

    return (
        <LoginBody>
            <img src={logo} alt="TrackIt" />
            <Input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
            {button ? <Button onClick={signIn}>Entrar</Button> : <Button loading={true}><Loading /></Button>}
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </LoginBody>
    );
}