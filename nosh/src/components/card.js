import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';



class MealCard extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div >
				<Card style={{ width: '100%'}} className="mt-3">
				  <Card.Img className="rounded mx-auto d-block" variant="top" src={this.props.image} style={{ width: '80%'}} />
				  <Card.Body>
				    <Card.Title className="text-center">Card Title</Card.Title>
				    <Card.Text className="text-center">
				      Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				    <Button className="rounded mx-auto d-block" variant="primary">Go somewhere</Button>
				  </Card.Body>
				</Card>
			</div>




			)
	}
}


export default MealCard