import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './footer.js';
import Header from './header.js';
import Article from './article/article.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Article></Article>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
