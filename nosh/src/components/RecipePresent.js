import React from 'react';
import { Button, Card, ListGroup, ListGroupItem, Table, Carousel } from 'react-bootstrap';
//import Recipe_Carousel from './Recipe_Carousel';
import 'bootstrap/dist/css/bootstrap.css';



class RecipePresent extends React.Component{
	constructor(props){
		super(props);
		
	}


	render(){
		return(
			<div >
				<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
					Some quick example text to build on the card title and make up the bulk of
					the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
				</Card>
			</div>




			)
	}
}


export default RecipePresent