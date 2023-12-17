import styled from "styled-components";

export const Container = styled.div`
    background-color: #0B1B2B;
    position: relative;
    display: flex;
    align-items: center;
    width: 864px;
    background-color: #0B1B2B;
    border-radius: 10px;
    margin-top: -4em;
    box-shadow: 0 2px 14px black;

    #data {
        margin-top: -1em;
    }

    img {
        width: 148px;
        height: 148px;
        padding: 32px 40px;
    }

    #socialmedia {
        display: flex;
        align-items: center;
        gap: 0 1em;
    }

    #socialmedia div span {
        margin: 0 .5em;
    }

    #github_share {
        position: absolute;
        top: 32px;
        right: 40px;
    }

    #github_share span {
        margin: 0 .5em;
    }

    a {
        text-decoration: none;
        color: #3294F8;
    }
`