import Title from "../components/Title";
import AddHabit from "../components/AddHabit";
import Habit from "../components/Habit";

import UserContext from "../context/UserContext";

import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function Habits() {
    const [addHabit, setAddHabit] = useState(false);
    const [habits, setHabits] = useState([]);
    const [habitName, setHabitName] = useState("");
    const user = useContext(UserContext);

    function getHabits() {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        axios("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
            .then(res => setHabits(res.data))
            .catch(err => alert(err));
    }

    useEffect((getHabits), []);

    return (
        <HabitsBody>
            <Title addButton={true} setAddHabit={setAddHabit}>Meus hábitos</Title>
            {addHabit ? 
                <AddHabit
                    setAddHabit={setAddHabit}
                    getHabits={getHabits}
                    habitName={habitName}
                    setHabitName={setHabitName}
                /> : ""
            }
            {habits.length > 0 ?
                habits.map((habit, i) => 
                <Habit
                    key={i}
                    name={habit.name}
                    days={habit.days}
                    idHabit={habit.id}
                    getHabits={getHabits}
                />)
                :
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            }
        </HabitsBody>
    );
}

const HabitsBody = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 92px 16px;
    box-sizing: border-box;
    background-color: #F2F2F2;

    p {
        font-family: Lexend Deca;
        font-size: 18px;
        color: #666666;
        margin-top: 24px;
    }
`;