import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Products from './Products/Products';
import Footer from './Footer/Footer';
import ThemeToggle from './ThemeToggle/ThemeToggle';
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#7c3aed',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Products />
        {/* <About /> */}
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;