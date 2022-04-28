// router
import { Route, Routes, Navigate } from 'react-router-dom';
// components
import { Home, ViewContact, CreateContact, EditContact } from './pages';
import { Header } from './components/header/Header';
import { NavBar } from './components/navBar/NavBar';
// material ui
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(',')
    },
  });

  return (
    <div className="app">
      <NavBar />
      <Header />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/viewcontact/:id' element={<ViewContact />} />
          <Route path='/createcontact' element={<CreateContact />} />
          <Route path='/editcontact/:id' element={<EditContact />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
