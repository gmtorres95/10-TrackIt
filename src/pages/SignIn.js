import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function SignIn() {
    return (
        <SignInBody>
            <img src={logo} alt="TrackIt" />
            <Input placeholder="email" />
            <Input placeholder="senha" />
            <Button>Entrar</Button>
            <Link to="">Não tem uma conta? Cadastre-se!</Link>
        </SignInBody>
    );
}

const SignInBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px;

    img {
        margin: 32px auto 28px;
    }

    a {
        color: #52B6FF;
        font-family: Lexend Deca;
        font-size: 14px;
        margin-top: 20px
    }
`;

const Input = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-family: Lexend Deca;
    font-size: 20px;
    padding: 0px 12px;
    box-sizing: border-box;
    margin: 4px auto;

    ::placeholder {
        font-family: Lexend Deca;
        font-size: 20px;
        color: #DBDBDB;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;
    font-family: Lexend Deca;
    font-size: 20px;
    color: #FFF;
    margin: 4px auto;
`;