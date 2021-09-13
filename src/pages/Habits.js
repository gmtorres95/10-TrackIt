import Title from "../components/Title";
import AddHabit from "../components/AddHabit";
import Habit from "../components/Habit";
import StyledBody from "../components/styled/StyledBody";

import UserContext from "../context/UserContext";

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
        <StyledBody>
            <Title
                addButton={true}
                setAddHabit={setAddHabit}
                text="Meus hábitos"
            />
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
        </StyledBody>
    );
}