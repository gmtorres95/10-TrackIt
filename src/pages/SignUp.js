import logo from "../assets/img/logo-1.png";
import LoginBody from "../components/styled/LoginBody";
import StyledInput from "../components/styled/StyledInput";
import StyledButton from "../components/styled/StyledButton";

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
            <StyledInput
                placeholder="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <StyledInput
                type="password"
                placeholder="senha"
                value={password} onChange={e => setPassword(e.target.value)}
            />
            <StyledInput 
                placeholder="nome" 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <StyledInput
                placeholder="foto"
                value={image}
                onChange={e => setImage(e.target.value)}
            />
            {button ?
                <StyledButton onClick={signUp}>Cadastrar</StyledButton>
                :
                <StyledButton loading={true}><Loading height={43} width={80}/></StyledButton>
            }
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </LoginBody>
    );
}