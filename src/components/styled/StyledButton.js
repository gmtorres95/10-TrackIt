import styled from "styled-components";

const StyledButton = styled.button`
    width: ${props => props.width ? `${props.width}px` : "100%"};
    height: ${props => props.height ? `${props.height}px` : "45px"};
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme === "white" ? "#FFF" : "#52B6FF"};
    font-family: Lexend Deca;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : "20px"};
    color: ${props => props.theme === "white" ? "#52B6FF" : "#FFF"};
    margin: 4px 0px;
    opacity: ${props => props.loading ? 0.7 : 1.0};
`;

export default StyledButton;