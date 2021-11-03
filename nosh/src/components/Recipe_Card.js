import React from 'react';
import { Button, Card, CardGroup, ListGroup, ListGroupItem, Table, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Recipe_Card extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		return(
            <div>
                <Card style={{ width: '8rem' }}>
                <Card.Img variant="top" src="../logo.svg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                </Card.Body>
                </Card>
            </div>


			)
	}
}


export default Recipe_Card;