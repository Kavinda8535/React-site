import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//Components
import Header from './components/headerComponents/header.js';
import Footer from './components/footerComponent/footer.js';
import Homepage from './components/pages/homePage.js';
import Products from './components/pages/products.js';

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
          
          {/* <Homepage/>
          <Products/> */}

        <Footer/> 
      </div>
      </Router>
    );
  }
}

export default App;
