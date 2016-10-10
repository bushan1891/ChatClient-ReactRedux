import { CART_ITEM , NEW_CART_ITEM , NEW_CART} from '../Table/viewtable/edittable/types';
import React , { Component} from 'react';
import {connect} from 'react-redux';
import styles from './styles.css';
import Cart_Edit from './cart-edit';


class Cart_Index extends Component{

renderTable(table){
			if(table){
				return(
					<Cart_Edit data={table} key={table._id}/>
					)
			}
}	

renderTest(obj){
console.log('test',obj);
}

render(){
	const cart = this.props.cart;
	if(cart.table.length==0){
		swal('Cart Is empty');
	}

	return(
		<div className="">
		<div className={styles.title}>Current Cart Elements</div>
			<div className={styles.cart_table_container}>
			{cart.table.map((obj)=>this.renderTable(obj))}
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