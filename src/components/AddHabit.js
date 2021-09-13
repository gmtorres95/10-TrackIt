import StyledInput from "./styled/StyledInput";
import StyledButton from "./styled/StyledButton";
import { Weekdays, Weekday } from "./styled/Weekdays";
import Loading from "./Loading";

import UserContext from "../context/UserContext";
import ProgressContext from "../context/ProgressContext";

import { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function AddHabit({ setAddHabit, getHabits, habitName, setHabitName }) {
    const {user} = useContext(UserContext);
    const {
        numberOfHabits,
        setNumberOfHabits
    } = useContext(ProgressContext);

    const [day0, setDay0] = useState(false);
    const [day1, setDay1] = useState(false);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);
    const [day4, setDay4] = useState(false);
    const [day5, setDay5] = useState(false);
    const [day6, setDay6] = useState(false);
    const [button, setButton] = useState(true);
    const selectedDays = [];
    
    const weekdays = [
        {
            id: 0,
            name: "D",
            day: day0,
            setDay: setDay0
        },
        {
            id: 1,
            name: "S",
            day: day1,
            setDay: setDay1
        },
        {
            id: 2,
            name: "T",
            day: day2,
            setDay: setDay2
        },
        {
            id: 3,
            name: "Q",
            day: day3,
            setDay: setDay3
        },
        {
            id: 4,
            name: "Q",
            day: day4,
            setDay: setDay4
        },
        {
            id: 5,
            name: "S",
            day: day5,
            setDay: setDay5
        },
        {
            id: 6,
            name: "S",
            day: day6,
            setDay: setDay6
        }
    ];
    
    weekdays.map((weekday) => weekday.day ? selectedDays.push(weekday.id) : "");

    function postHabit() {
        setButton(false);
        const body = {
            name: habitName,
            days: selectedDays
        };
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        .then(() => {
            setHabitName("");
            getHabits();
            setButton(true);
            setAddHabit(false);
            setNumberOfHabits(numberOfHabits + 1);
        })
        .catch(err => {
            alert(err);
            setButton(true);
        })
    }

    return (
        <AddHabitWindow>
            <StyledInput
                placeholder="nome do hábito"
                value={habitName}
                disabled={!button}
                onChange={e =>
                setHabitName(e.target.value)
            }/>
            <Weekdays>
                {weekdays.map((weekday, i) => 
                    button ? 
                    <Weekday 
                        isSelected={weekday.day}
                        onClick={() => weekday.setDay(!weekday.day)}
                        key={i}
                    >{weekday.name}</Weekday>
                    :
                    <Weekday 
                        isSelected={weekday.day}
                        key={i}
                    >{weekday.name}</Weekday>
                )}
            </Weekdays>
            <BottomButtons>
                <StyledButton
                    fontSize={16}
                    width={100}
                    height={35}
                    theme="white"
                    onClick={() => setAddHabit(false)}
                >Cancelar</StyledButton>
                {button ? 
                    <StyledButton
                        fontSize={16}
                        width={84}
                        height={35}
                        onClick={postHabit}
                    >Salvar</StyledButton>
                    :
                    <StyledButton
                        loading={true}
                        width={84}
                        height={35}
                    ><Loading height={35} width={43} /></StyledButton>
                }
            </BottomButtons>
        </AddHabitWindow>
    );
}

const AddHabitWindow = styled.div`
    width: 100%;
    height: 180px;
    border-radius: 5px;
    margin: 20px 0px;
    padding: 18px;
    box-sizing: border-box;
    background-color: #FFF;
`;

const BottomButtons = styled.div`
    display: flex;
    margin-top: 24px;
    margin-left: calc(100% - 184px);
`;