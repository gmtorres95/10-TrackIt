import logo from "../assets/img/logo-2.png";

import UserContext from "../context/UserContext";

import { useContext } from "react";
import styled from "styled-components";

export default function Top() {
    const {user} = useContext(UserContext);
    
    return (
        <Header>
            <img src={logo} alt="TrackIt" />
            <Avatar src={user.image} alt="TrackIt" />
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
`;

const Avatar = styled.img`
    width: 52px;
    height: 52px;
    border-radius: 52px;
`;