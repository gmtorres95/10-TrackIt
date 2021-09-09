import logo from "../assets/img/logo.png";
import { LoginBody, Input, Button } from "../components/styled/login";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const history = useHistory();
    
    function signUp() {
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
        .catch(err => alert(err))
    }

    return (
        <LoginBody>
            <img src={logo} alt="TrackIt" />
            <Input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
            <Input placeholder="nome" value={name} onChange={e => setName(e.target.value)} />
            <Input placeholder="foto" value={image} onChange={e => setImage(e.target.value)} />
            <Button onClick={signUp}>Cadastrar</Button>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </LoginBody>
    );
}