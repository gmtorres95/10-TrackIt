import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { LoginBody, Input, Button } from "../components/styled/login";

export default function SignIn() {
    return (
        <LoginBody>
            <img src={logo} alt="TrackIt" />
            <Input placeholder="email" />
            <Input type="password" placeholder="senha" />
            <Button>Entrar</Button>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </LoginBody>
    );
}