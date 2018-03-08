import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//Components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import Movies from './components/pages/movies';
import Signup from './components/pages/signUpPage';

// includes
import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>

          <Route exact path='/' component={Homepage} />
          <Route exact path='/Products' component={Products} />
          <Route exact path='/Movies' component={Movies} />

          <Route exact path='/Signup' component={Signup} />
          
          {/* <Homepage/>
          <Products/> */}

        <Footer/> 
      </div>
      </Router>
    );
  }
}

export default App;
