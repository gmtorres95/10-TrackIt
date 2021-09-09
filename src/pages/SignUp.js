import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { LoginBody, Input, Button } from "../components/styled/login";

export default function SignUp() {
    return (
        <LoginBody>
            <img src={logo} alt="TrackIt" />
            <Input placeholder="email" />
            <Input placeholder="senha" />
            <Input placeholder="nome" />
            <Input placeholder="foto" />
            <Button>Cadastrar</Button>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </LoginBody>
    );
}