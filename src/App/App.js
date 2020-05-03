import React from 'react';

import Navbar from './Navbar/Navbar';
import Form from './Form/Form';
import PageContent from './PageContent/PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </ PageContent>
      </LanguageProvider>
    </ThemeProvider>
  );
}