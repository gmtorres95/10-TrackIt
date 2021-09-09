import logo from "../assets/img/logo-1.png";
import LoginBody from "../components/styled/LoginBody";
import StyledInput from "../components/styled/StyledInput";
import StyledButton from "../components/styled/StyledButton";

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
            <StyledInput
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <StyledInput
                type="password"
                placeholder="senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            {button ?
                <StyledButton onClick={signIn}>Entrar</StyledButton>
                :
                <StyledButton loading={true}><Loading /></StyledButton>
            }
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </LoginBody>
    );
}