import logo from "../assets/img/logo-2.png";

import UserContext from "../context/UserContext";

import { useContext, useState } from "react";
import styled from "styled-components";

export default function Top() {
    const [logout, setLogout] = useState(false);
    const {user} = useContext(UserContext);

    function signOut() {
        if(window.confirm("Deseja realmente sair?")) {
            localStorage.clear();
            window.open("/","_self");
        }
    }
    
    return (
        <Header>
            <img src={logo} alt="TrackIt" />
            <Avatar onClick={() => setLogout(!logout)} src={user.image} alt="TrackIt" />
            {logout ? 
                <Logout onClick={signOut}>Logout</Logout>
                :
                ""
            }
        </Header>
    );
}

const Header = styled.header`
    width: 100%;
    height: 70px;
    padding: 18px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 1s;
`;

const Avatar = styled.img`
    width: 52px;
    height: 52px;
    border-radius: 52px;
`;

const Logout = styled.div`
    height: 100%;
    border-radius: 8px;
    background-color: #Cc3737;
    border: solid 2px #822222;
    padding: 0px 24px;
    font-family: Lexend Deca;
    color: #EBEBEB;
    display: flex;
    align-items: center;
`;