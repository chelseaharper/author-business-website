import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Shared/Header';
import NavBar from './Components/Shared/NavBar/NavBar';
import Books from './Components/HomePage/Books';
import NewsletterForm from './Components/HomePage/NewsletterForm';
import Homepage from './Components/HomePage/Homepage';
import BooksPage from './Components/Books/BooksPage';
import Kickstarters from './Components/Kickstarters/Kickstarters';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';

function App() {
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
    <BrowserRouter>
      <Header />
        <NavBar/>
          <Routes>
            <Route path="/" element={<Homepage books={books}/>} />
            <Route path="/books" element={<BooksPage/>} />
            <Route path="/kickstarter" element={<Kickstarters/>} />
            <Route path="/aboutus" element={<About/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
