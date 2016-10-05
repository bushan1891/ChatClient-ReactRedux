import React ,{Component } from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import SideBar from './sidebar/sidebar';

class Table extends Component {
	render(){
		return (
			<div className="">
				<div className="row">
					<div className="col-md-3">
						<SideBar />
					</div>	
					<div className="col-md-9">
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
