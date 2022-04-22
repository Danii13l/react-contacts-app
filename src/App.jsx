// router
import { Route, Routes } from 'react-router-dom';

// components
import { Home, ViewContact, CreateContact } from './pages';
import { Header } from './components/header/Header';

// material ui
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

// store-redux
import store from './redux/store';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(',')
    },
    palette: {
      inputs: {
        blue: '#123c69'
      },

    },
  });


  return (
    <div className="app">
      <Header />

      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/viewcontact/:id' element={<ViewContact />} />
            <Route path='/createcontact/:id' element={<CreateContact />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
