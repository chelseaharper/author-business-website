import React from 'react';
import styled from 'styled-components';

const StyledBooks = styled.div`
display: flex;
font-family: Georgia, 'Times New Roman', Times, serif;
text-align: center;
align: center;
max-width: 75%;
padding-top: 20px;
padding-bottom: 20px;
padding-left: 5px;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
color: #191716;
background-color: #c6b796;
`;

const Image = styled.img`
width: 233px;
height: 333px;
padding-right: 5px;
object-fit: cover;
`;

function Books({images}) {
    return (
        <StyledBooks>
            {images.map(
                (image: string, index: string) => (
                    <Image key={index} src={image} />
                )
            )}
        </StyledBooks>
    )
}

export default Books;