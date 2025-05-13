import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Shared/Header';
import NavBar from './Components/Shared/NavBar/NavBar';
import Books from './Components/HomePage/Books';
import NewsletterForm from './Components/HomePage/NewsletterForm';
import Homepage from './Components/HomePage/Homepage';
import BooksPage from './Components/Books/BooksPage';

function App() {
  useEffect(() => {
    document.title = "Musings, Mythos, Magic";
    const link = document.querySelector("link[rel~='icon'") as HTMLLinkElement;
    if (link) {
      link.href = "/Images/open-book_2702134.png"
    }
  }, [])

  const images = [
    "/Images/Tales_of_the_Laisian_Empire_eBook.png",
    "/Images/wakeofthephoenix_ebook.png",
];

  return (
    <>
    <Header />
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage images={images}/>} />
        <Route path="/#books" element={<BooksPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
