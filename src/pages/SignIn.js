import logo from "../assets/img/logo-1.png";
import LoginBody from "../components/styled/LoginBody";
import StyledInput from "../components/styled/StyledInput";
import StyledButton from "../components/styled/StyledButton";
import Loading from "../components/Loading";

import UserContext from "../context/UserContext";

import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
    const {user, setUser, saveUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [button, setButton] = useState(true);

    function signIn() {
        setButton(false);
        const body = {email, password};
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
        .then(resp => {
            saveUser(resp.data);
            history.push("/hoje");
        })
        .catch(err => {
            alert(err);
            setButton(true);
        })
    }

    useEffect((() => {
        setUser({
            id: localStorage.getItem("id"),
            image: localStorage.getItem("image"),
            name: localStorage.getItem("name"),
            token: localStorage.getItem("token")
        });
    }), []);

    if(user.token) history.push("/hoje");

    return (
        <LoginBody>
            <img src={logo} alt="TrackIt" />
            <StyledInput
                placeholder="email"
                value={email}
                disabled={!button}
                onChange={e => setEmail(e.target.value)}
            />
            <StyledInput
                type="password"
                placeholder="senha"
                value={password}
                disabled={!button}
                onChange={e => setPassword(e.target.value)}
            />
            {button ?
                <StyledButton onClick={signIn}>Entrar</StyledButton>
                :
                <StyledButton loading={true}><Loading height={43} width={80} /></StyledButton>
            }
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </LoginBody>
    );
}