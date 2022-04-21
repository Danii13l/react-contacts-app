// router
import { Route, Routes } from 'react-router-dom';

// components
import { Home, ViewContact, CreateContact } from './pages';
import { Header } from './components/header/Header';

// material ui
import { createTheme, ThemeProvider } from '@mui/material';


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(',')
    }
  });


  return (
    <div className="App">
      <Header />

      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/viewcontact/:id' element={<ViewContact />} />
          <Route path='/createcontact/:id' element={<CreateContact />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
