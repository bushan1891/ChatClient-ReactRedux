import { CART_ITEM , NEW_CART_ITEM , NEW_CART} from '../Table/viewtable/edittable/types';
import React , { Component} from 'react';
import {connect} from 'react-redux';

class Cart_Index extends Component{
	
render(){
	return(
		<div className="">
			welcome to cart
		</div>
		)
	}
}

function mapStateProps(state){
	return{
		cart:state.cart,
	}
}

export default connect(mapStateProps,null)(Cart_Index);