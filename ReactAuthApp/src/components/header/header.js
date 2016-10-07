import React from 'react';
import {connect } from 'react-redux';
import { Link } from 'react-router';
import styles from './styles.css';
class Header extends React.Component {

  renderCartCount(){
    if(this.props.cart.table.length >0){
      return(<div className={styles.count} >
          <div className="animated rubberBand">{this.props.cart.table.length}</div>
           </div>
        )
    }
    else{
      return(
      <div></div>
      )
    }
  }

renderLinks(){

  if(this.props.authenticated){
    return (
      <ul className="nav navbar-nav navbar-right">
       <li className="nav-item">
              <Link to="/table" className="nav-link">Table</Link>
       </li>
        <li className="nav-item">
        <Link to="/signout" className="nav-link">Sign out</Link>
        </li> 
        <li className="nav-item"> 
        
        <Link to="/" className="nav-link"><i className="fa fa-shopping-cart fa-fw"></i>Cart   {this.renderCartCount()} 
        </Link>
       
        </li>       
      </ul>
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
  authenticated: state.auth.authenticated,
  cart:state.cart,
}
}

export default connect(mapStateToProps)(Header);
