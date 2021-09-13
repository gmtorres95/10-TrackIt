import StyledButton from "./styled/StyledButton";

import ProgressContext from "../context/ProgressContext";

import { useContext } from "react";
import styled from "styled-components";

export default function Title({text, subtitle, addButton, setAddHabit}) {
    const {progress} = useContext(ProgressContext);

    return (
        <StyledTitle isSubtitleGreen={progress ? true : false}>
            <div>
                <h1>{text}</h1>
                {addButton ? 
                    <StyledButton
                        width={40}
                        height={35}
                        fontSize={27}
                        onClick={() => setAddHabit(true)}
                    ><ion-icon name="add-outline" /></StyledButton> : ""}
            </div>
            <h2>{subtitle}</h2>
        </StyledTitle>
    );
}

const StyledTitle = styled.div`
    font-family: Lexend Deca;

    h1 {
        font-size: 23px;
        color: #126BA5;
        margin: 4px 0px;
    }

    h2 {
        font-size: 18px;
        color: ${props => props.isSubtitleGreen ? "#8FC549" : "#BABABA"};
        margin: 4px 0px 28px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;