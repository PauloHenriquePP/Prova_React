import styled from "styled-components";

export const Container = styled.div`
    width: 352px;
    border-radius: 10px;
    padding: 32px;
    margin: 0 32px 32px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #112131;
    position: relative;
    transition: all 1s;

    :hover {
        cursor: pointer;
        scale: 1.1;
    }

    h1 {
        font-size: 20px;
        width: 70%;
    }

    span {
        position: absolute;
        top: 32px;
        right: 32px;
        font-size: 14px;
    }
`