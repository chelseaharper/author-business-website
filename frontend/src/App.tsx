import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from './Components/Shared/Header';
import NavBar from './Components/Shared/NavBar/NavBar';
import Homepage from './Components/HomePage/Homepage';
import LandingPage from './Components/HomePage/LandingPage';
import BooksPage from './Components/Books/BooksPage';
import Kickstarters from './Components/Kickstarters/Kickstarters';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import { BookGenreProvider, useBookGenre } from './Components/HomePage/BookGenreContext';

function AppContent() {
  const { genre } = useBookGenre();

  useEffect(() => {
    document.body.classList.toggle('romantasy-theme', genre === 'romantasy');
    return () => document.body.classList.remove('romantasy-theme');
  }, [genre]);

  useEffect(() => {
    document.title = "Musings, Mythos, Magic";
    const link = document.querySelector("link[rel~='icon'") as HTMLLinkElement;
    if (link) {
      link.href = "/Images/open-book_2702134.png"
    }
  }, [])

  const books = [{
    id: 'wake-of-the-phoenix',
    title: 'Wake of the Phoenix',
    coverImage: "/Images/Wake of the Phoenix eBook.jpg",
  },
    // {
    //   id: 'tales-of-the-laisian-empire',
    //   title: 'Tales of the Laisian Empire',
    // coverImage: "/Images/Tales_of_the_Laisian_Empire_eBook.png",
    // }
];

  return (
    <>
      <Header />
      {genre ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={genre ? <Homepage books={books}/> : <LandingPage />} />
        <Route path="/books" element={<BooksPage/>} />
        <Route path="/kickstarter" element={<Kickstarters/>} />
        <Route path="/aboutus" element={<About/>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <BookGenreProvider>
        <AppContent />
      </BookGenreProvider>
    </BrowserRouter>
  );
}

export default App;
