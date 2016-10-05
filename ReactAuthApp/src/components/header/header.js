import React from 'react';
import {connect } from 'react-redux';
import { Link } from 'react-router';
import styles from './styles.css';
class Header extends React.Component {

renderLinks(){

  if(this.props.authenticated){
    return (
      <div>
          <li className="nav-item">
              <Link to="/signout" className="nav-link">Sign out</Link>
          </li>
          <li className="nav-item">
              <Link to="/table" className="nav-link">Table</Link>
          </li>
      </div>
    )
  } else{
    return  [
      <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link">Sign in</Link>
      </li> ,

      <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link">Sign Up</Link>
      </li>

    ]

  }
}

  render(){
    return (
      <nav className="navbar navbar-dark bg-inverse" >
        <Link to="/" className="navbar-brand" >JCS</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    )

  }
}

function mapStateToProps(state){
return {
  authenticated: state.auth.authenticated
}
}

export default connect(mapStateToProps)(Header);
