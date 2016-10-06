import React ,{Component } from 'react';
import styles from '../styles.css';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import { createAction } from 'redux-actions';
import { POST_TABLE , POST_TABLE_SUCCESSFUL , FETCH_TABLES} from '../types';
import DisplayList from './displaylist';

class ViewTable extends Component {

componentWillMount(){
	// get all the tables
	const fetchTable = this.props.fetchTable;
	fetchTable(); 
}
	render(){
		if(this.props.table[0]!=null){
			const tables=[];
			for(const t in this.props.table){
				tables.push(this.props.table[t]);
			}

			return( 
			<div className={styles.table_view_container}>
					<ul className="">
						{tables.map((result) => (
                       <ListItemWrapper key={result._id} data={result} />
        										))}
					</ul>
				</div>
			)
		}
		else{
			return(
			<div className={styles.table_view_container}>
					<ul className="">
					Loading...
					</ul>
				</div>
			)

		}
	}
}

class ListItemWrapper extends React.Component {
  render() {
    return (<div className="card card-inverse card-warning text-xs-center">
    			  <div className="card-block">
    			    <blockquote className="card-blockquote">
    			      <p>{this.props.data.tableName}</p>
    			      <lable> Number of Rows :</lable> {this.props.data.tableRowCount} <br/ >
    			      <lable> Number of Rows :</lable> {this.props.data.tableColumnCount}
    			    </blockquote>
    			  </div>
    		 </div>);
  }
}
function mapDispatchToProps(dispatch) {
  return {
  	fetchTable: ()=>dispatch(createAction(FETCH_TABLES)() ),
    dispatch,
  }
}


function mapStateToProps(state){

  return { table : state.table}
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewTable);