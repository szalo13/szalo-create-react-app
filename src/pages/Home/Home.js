import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Home.css';
import HeadTitle from '../../components/Head-title/Head-title.js';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <HeadTitle />
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Home;
