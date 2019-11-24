import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/homepage.component';
import MapPage from './pages/MapPage/mappage.component';
import Nav from './components/Nav/nav.component';
import Footer from './components/Footer/footer.component';
import NavigationSchema from './components/NavigationSchema/navigationschema.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <NavigationSchema/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/mapasinterativos" component={MapPage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
