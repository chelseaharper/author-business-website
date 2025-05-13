import React from "react";
import './Header.css';
import styled from 'styled-components';

const StyledHeader = styled.h1`
font-family: Georgia, 'Times New Roman', Times, serif;
text-align: center;
max-width: 75%;
padding-top: 20px;
padding-bottom: 20px;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
color: #191716;
background-color: #c6b796;
`;

const Header = () => {
    return (
        <StyledHeader>
            Chelsea Harper Books
        </StyledHeader>
    )
}

export default Header;