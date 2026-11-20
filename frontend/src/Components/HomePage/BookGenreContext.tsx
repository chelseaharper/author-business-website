import React, { createContext, useContext, useState, useEffect } from 'react';

export type BookGenre = 'romantasy' | 'epic-fantasy' | null;

interface BookGenreContextType {
  genre: BookGenre;
  setGenre: (genre: BookGenre) => void;
}

const BookGenreContext = createContext<BookGenreContextType | undefined>(undefined);

export function BookGenreProvider({ children }: { children: React.ReactNode }) {
  const [genre, setGenreState] = useState<BookGenre>(() => {
    // Initialize from localStorage if available
    const stored = localStorage.getItem('bookGenre');
    return (stored as BookGenre) || null;
  });

  // Persist genre selection to localStorage
  const setGenre = (newGenre: BookGenre) => {
    setGenreState(newGenre);
    if (newGenre) {
      localStorage.setItem('bookGenre', newGenre);
    } else {
      localStorage.removeItem('bookGenre');
    }
  };

  return (
    <BookGenreContext.Provider value={{ genre, setGenre }}>
      {children}
    </BookGenreContext.Provider>
  );
}

export function useBookGenre() {
  const context = useContext(BookGenreContext);
  if (context === undefined) {
    throw new Error('useBookGenre must be used within a BookGenreProvider');
  }
  return context;
}
