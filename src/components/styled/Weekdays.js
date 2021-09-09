import styled from "styled-components";

const Weekday = styled.div`
    height: 28px;
    width: 28px;
    border-radius: 5px;
    border: 1px solid ${props => props.isSelected ? "#CFCFCF" : "#D4D4D4"};
    background-color: ${props => props.isSelected ? "#CFCFCF" : "#FFF"};
    color: ${props => props.isSelected ? "#FFF" : "#DBDBDB"};
    font-family: Lexend Deca;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;

    &:first-child {
        margin-left: 0px;
    }
`;

const Weekdays = styled.div`
    height: 30px;
    border-radius: 5px;
    display: flex;
    margin: 4px 0px;
`;

export {
    Weekday,
    Weekdays
};