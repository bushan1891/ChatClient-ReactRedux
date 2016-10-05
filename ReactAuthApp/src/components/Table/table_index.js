import React ,{Component } from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import SideBar from './sidebar/sidebar';

class Table extends Component {
	render(){
		return (
			<div className={styles.table_container}>
			<SideBar />
			</div>
			)
	}
}

function mapStateToProps(state){
	return {errorMessage : state.auth.error}
}

export default connect (mapStateToProps)(Table);
