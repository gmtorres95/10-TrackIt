import logo from "../assets/img/logo-1.png";
import { LoginBody, Input, Button } from "../components/styled/login";

import Loading from "../components/Loading";

import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const history = useHistory();
    const [button, setButton] = useState(true);
    
    function signUp() {
        setButton(false);
        const body = {
            email,
            name,
            image,
            password
        };
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
        .then(() => {
            alert("Cadastro feito com sucesso!");
            history.push("/");
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
            <Input placeholder="nome" value={name} onChange={e => setName(e.target.value)} />
            <Input placeholder="foto" value={image} onChange={e => setImage(e.target.value)} />
            {button ? <Button onClick={signUp}>Cadastrar</Button> : <Button loading={true}><Loading /></Button>}
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </LoginBody>
    );
}