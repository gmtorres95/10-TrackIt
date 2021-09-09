import Title from "../components/Title";

import styled from "styled-components";
import { useState } from "react";

export default function Habits() {

    return (
        <HabitsBody>
            <Title addButton={true}>Meus hábitos</Title>
        </HabitsBody>
    );
}

const HabitsBody = styled.div`
    width: 100%;
    height: 100vh;
    padding: 92px 16px;
    box-sizing: border-box;
    background-color: #F2F2F2;
`;