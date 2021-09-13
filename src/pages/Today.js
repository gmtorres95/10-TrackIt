import StyledBody from "../components/styled/StyledBody";
import Title from "../components/Title";
import TodayHabit from "../components/TodayHabit";

import UserContext from "../context/UserContext";
import ProgressContext from "../context/ProgressContext";

import { useContext, useEffect, useState } from "react";
import axios from "axios";

function returnDate() {
    let weekday = new Date().toLocaleString("pt-BR", {weekday: "long"});
    weekday = weekday.charAt(0).toLocaleUpperCase() + weekday.slice(1).replace("-feira", "")
    const day = new Date().getDate();
    const month = (new Date().getMonth()+1).toString().padStart(2, "0");
    return `${weekday}, ${day}/${month}`;
}

export default function Today() {
    const [todaysHabits, setTodaysHabits] = useState([]);
    const user = useContext(UserContext);
    const {
        progress,
        setNumberOfHabits,
        setNumberOfHabitsDone
    } = useContext(ProgressContext);
    const date = returnDate();

    function getTodaysHabits() {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        axios("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then(res => {
                setTodaysHabits(res.data);
                setNumberOfHabits(res.data.length);
                setNumberOfHabitsDone(res.data.filter(habit => habit.done).length);
            })
            .catch(err => alert(err));
    }

    useEffect((getTodaysHabits), []);

    return (
        <StyledBody>
            <Title 
                text={date}
                subtitle={progress === 0 ? "Nenhum hábito concluído ainda" : progress + "% dos hábitos concluídos"}
            />
            {todaysHabits.length > 0 ?
                todaysHabits.map(habit => <TodayHabit
                    key={habit.id}
                    habit={habit}
            />) : ""}
        </StyledBody>
    );
}