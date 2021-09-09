import { Weekday, Weekdays } from "./styled/Weekdays";

import UserContext from "../context/UserContext";

import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";

export default function Habit({ name, days, idHabit, getHabits }) {
    const user = useContext(UserContext);
    const weekdays = [
        {
            id: 0,
            name: "D"
        },
        {
            id: 1,
            name: "S"
        },
        {
            id: 2,
            name: "T"
        },
        {
            id: 3,
            name: "Q"
        },
        {
            id: 4,
            name: "Q"
        },
        {
            id: 5,
            name: "S"
        },
        {
            id: 6,
            name: "S"
        }
    ];

    function deleteHabit() {
        if(!window.confirm("Deseja realmente deletar a tarefa?")) return;

        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabit}`, config)
            .then(() => getHabits())
            .catch(err => alert(err));
    }

    return (
        <HabitBody>
            <HabitTitle>{name}</HabitTitle>
            <Weekdays>
                {weekdays.map((weekday, i) => 
                    <Weekday 
                        key={i}
                        isSelected={days.includes(weekday.id)}
                    >{weekday.name}</Weekday>
                )}
            </Weekdays>
            <ion-icon
                name="trash-outline"
                onClick={deleteHabit}
            />
        </HabitBody>
    );
}

const HabitBody = styled.div`
    width: 100%;
    border-radius: 5px;
    margin: 20px 0px;
    padding: 18px;
    box-sizing: border-box;
    background-color: #FFF;
    position: relative;

    ion-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 18px;
        color: #666666;
    }
`;

const HabitTitle = styled.h1`
    font-family: Lexend Deca;
    font-size: 20px;
    color: #666666;
    margin-bottom: 8px;
`;