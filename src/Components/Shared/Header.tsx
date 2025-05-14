import React from "react";
import './Header.css';
import styled from 'styled-components';

const StyledHeader = styled.div`
font-family: Georgia, 'Times New Roman', Times, serif;
text-align: center;
max-width: 75%;
padding-top: 20px;
padding-bottom: 20px;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
color: #191716;
h1 {
        color: #191716;
    }
    h2 {
        color: #191716;
    }
background-color: #c6b796;
`;

const Header = () => {
    return (
        <>
        <StyledHeader>
            <h1>Musings, Mythos, and Magic</h1>
            <h2>by EmberFyre Books, LLC</h2>
        </StyledHeader>
        </>
    )
}

export default Header;