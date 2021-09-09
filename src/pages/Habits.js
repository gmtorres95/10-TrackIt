import Title from "../components/Title";

import AddHabit from "../components/AddHabit";

import styled from "styled-components";
import { useState } from "react";

export default function Habits() {
    const [addHabit, setAddHabit] = useState(false);

    return (
        <HabitsBody>
            <Title addButton={true} setAddHabit={setAddHabit}>Meus hábitos</Title>
            {addHabit ? <AddHabit setAddHabit={setAddHabit}/> : ""}
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