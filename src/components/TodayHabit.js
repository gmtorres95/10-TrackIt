import UserContext from "../context/UserContext";
import ProgressContext from "../context/ProgressContext";

import { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function TodayHabit({habit}) {
    const [isDone, setIsDone] = useState(habit.done);
    const {user} = useContext(UserContext);
    const {
        setProgress,
        numberOfHabits,
        numberOfHabitsDone,
        setNumberOfHabitsDone
    } = useContext(ProgressContext);

    function toggleHabbit(action) {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/${action}`, "", config)
            .then(() => {
                setIsDone(!isDone);
                if(action === "check") {
                    setNumberOfHabitsDone(numberOfHabitsDone + 1);
                    habit.currentSequence++;
                    habit.highestSequence++;
                }
                else {
                    setNumberOfHabitsDone(numberOfHabitsDone - 1);
                    habit.currentSequence--;
                    habit.highestSequence--;
                }
                setProgress(Math.round((numberOfHabitsDone / numberOfHabits) * 100))
            })
            .catch(err => alert(err));
    }

    return (
        <TodayHabitBody>
            <div>
                <h1>{habit.name}</h1>
                <div>
                    <span>Sequência atual: </span>
                    <Current isHabitDone={isDone}>
                        {habit.currentSequence} dias
                    </Current>
                </div>
                <div>
                    <span>Seu recorde: </span>
                    <Highest isHighest={habit.highestSequence === habit.currentSequence && habit.currentSequence > 0}>
                        {habit.highestSequence} dias
                    </Highest>
                </div>
            </div>
            <Check 
                onClick={() => toggleHabbit(isDone ? "uncheck" : "check")}
                isDone={isDone}
            >
                <ion-icon name="checkmark-outline" />
            </Check>
        </TodayHabitBody>
    );
}

const TodayHabitBody = styled.div`
    width: 100%;
    border-radius: 5px;
    background-color: #FFF;
    font-family: Lexend Deca;
    padding: 12px;
    margin: 10px 0px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #666666;

    h1 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    span {
        font-size: 13px;
    }

    ion-icon {
        --ionicon-stroke-width: 70px;
    }
`;

const Current = styled.span`
    color: ${props => props.isHabitDone ? "#8FC549" : "#666666"}; 
`;

const Highest = styled.span`
    color: ${props => props.isHighest ? "#8FC549" : "#666666"}; 
`;

const Check = styled.div`
    width: 69px;
    height: 69px;
    min-width: 69px;
    max-height: 69px;
    border-radius: 5px;
    font-size: 44px;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.isDone ? "#8FC549" : "#EBEBEB"};
`;