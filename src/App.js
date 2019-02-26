import React, { Component } from 'react';

// components
import Images from "./components/Images";
import Form from "./components/Form";
import Header from "./components/Header";
import HelpText from "./components/HelpText";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images : [],
      currentImage : null
    }
  }
  
  // event handlers
  handleChange = e => {
    if (e.target.files && e.target.files[0]){
      this.setState({currentImage : URL.createObjectURL(e.target.files[0])});
    }
    
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({images : [...this.state.images, this.state.currentImage]})
  }


  render() {
    const images = this.state.images;
    return (
      <div className = "app">
        <Header />
        <HelpText />
        <Form handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} />
        <Images images = {images}/>
      </div>
    );
  }
}

export default App;
