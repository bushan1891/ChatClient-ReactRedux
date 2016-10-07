import React ,{Component } from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import SideBar from './sidebar/sidebar';

class Table extends Component {
	render(){
		return (
			<div className={styles.tableview}>
				<div className="row">
					<div className="col-md-3 left_sidebar">
						<SideBar />
					</div>	
					<div className="col-md-9 right_sidebar">
						{this.props.children}	
					</div>
				</div>
			</div>
			)
	}
}

function mapStateToProps(state){
	return {errorMessage : state.auth.error}
}

export default connect (mapStateToProps)(Table);
