import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';

class Navbr extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
		<Navbar bg="dark" variant="dark">
			<Container>
		    	<Navbar.Brand href="#home">
		        <img
		          alt=""
		          src={this.props.image}
		          width="30"
		          height="30"
		          className="d-inline-block align-top"
		        />{' '}
		      	React Bootstrap
		      	</Navbar.Brand>
		    </Container>
		</Navbar>

		)
	}
}


export default Navbr