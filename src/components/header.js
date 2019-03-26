import React from 'react';
import {Link} from 'react-router-dom';


function	Header(){
	return(<header style={headerStyle}>
	<h1>Header</h1> 
	<Link to="/" style={{color:'white',textDecoration:'none',padding:'10px'}}>Home</Link>
	<Link to="/about" style={{color:'white',textDecoration:'none'}}>About</Link>
	</header>
	)
	
}
const headerStyle={
	background:'#333',
	color:'#fff',
	textAlign:'center',
	padding:'10px'
}
export default Header;