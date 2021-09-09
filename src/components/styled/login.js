import styled from "styled-components";

const LoginBody = styled.div`
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

export {
    LoginBody,
    Input,
    Button
};