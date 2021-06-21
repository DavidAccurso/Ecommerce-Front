import { ThemeProvider } from '@material-ui/styles';
import React, {useState} from 'react';
import MenuAppBar from './Componentes/Navegacion/MenuAppBar';
import Login from './Componentes/Seguridad/Login';
import RegistrarUsuario from './Componentes/Seguridad/RegistrarUsuario';
import theme from './Theme/Theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Libro from './Componentes/Pantallas/Libro';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/registrar" component={RegistrarUsuario}/>
          <Route exact path="/" component={Libro} />
        </Switch>
      </Router>
    </ThemeProvider>
  );}

export default App;
