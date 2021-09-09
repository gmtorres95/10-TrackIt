import styled from "styled-components";
import StyledButton from "./styled/StyledButton";

export default function Title({children, addButton, setAddHabit}) {
    return (
        <StyledTitle>
            {children}
            {addButton ? 
                <StyledButton
                    width={40}
                    height={35}
                    fontSize={27}
                    onClick={() => setAddHabit(true)}
                >+</StyledButton> : ""}
        </StyledTitle>
    );
}

const StyledTitle = styled.div`
    font-family: Lexend Deca;
    font-size: 23px;
    color: #126BA5;
    display: flex;
    align-items: center;
	justify-content: space-between;
`;