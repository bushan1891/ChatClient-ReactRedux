import React , {Component } from 'react';

export default class Auth0_lock extends Component{
  
 componentWillMount() {
     const lock = new Auth0Lock('owZUf4N2FAMGaOVj76SEi1LV35HCWtKL', 'jcstest.auth0.com');
  			lock.show();
  	}
  render() {
    return (<div>
    	</div>);
  }
}