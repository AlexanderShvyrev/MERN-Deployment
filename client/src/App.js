import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import './App.css';
import { Router } from '@reach/router';
import PetForm from './components/PetForm';
import Home from './containers/Home';
import NavBar from './containers/NavBar';
import OnePet from './components/OnePet';
import Update from './components/Update';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <PetForm path='/new' />
        <Home path='/' />
        <OnePet path='/pets/:id' />
        <Update path='/pets/:id/edit' />
      </Router>
    </div>
  );
}

export default App;
