import { CART_ITEM , NEW_CART_ITEM , NEW_CART} from '../Table/viewtable/edittable/types';
import React , { Component} from 'react';
import {connect} from 'react-redux';
import styles from './styles.css';

class Cart_Index extends Component{
	
render(){
	return(
		<div className="">
		<div className={styles.title}>Current Cart Elements</div>
			<div className={styles.flex_container}>
			</div>	
	
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