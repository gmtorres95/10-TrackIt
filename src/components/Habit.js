import styled from "styled-components";
import { Weekday, Weekdays } from "./styled/Weekdays";

export default function Habit({ name, days }) {
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
            <ion-icon name="trash-outline" />
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
`;