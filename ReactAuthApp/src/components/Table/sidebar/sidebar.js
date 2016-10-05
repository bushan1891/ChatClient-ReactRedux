import React , {Component} from 'react';
import styles from '../styles.css';
import {Link }from 'react-router';

class SideBar extends Component{	
	render(){
		return(
			<div className={styles.side_container}>
			<ul className={styles.side_list}>
				<li className={styles.item}><Link to="/table/create">Create Table</Link></li>
				<li className={styles.item}><Link to="/viewtable">View Table</Link></li>
			</ul>
		</div>
			)
		
	}
}

export default SideBar;