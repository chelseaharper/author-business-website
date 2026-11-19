import React from "react";
import './Header.css';
import { useBookGenre } from '../HomePage/BookGenreContext';

const Header = () => {
    const { genre } = useBookGenre();
    const isRomantasy = genre === 'romantasy';

    return (
        <header className={`site-header${isRomantasy ? ' romantasy-header' : ''}`}>
            <h1>Musings, Mythos, and Magic</h1>
            <h2>by EmberFyre Books, LLC</h2>
        </header>
    )
}

export default Header;