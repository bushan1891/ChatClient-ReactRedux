import React, { Component } from 'react';
import Header from './header/header';
import styles from './styles.css';
export default class App extends Component {
  render() {
    return (
      <div className={styles.container_app}>
        <Header />
        {this.props.children}
      </div>

    );
  }
}
