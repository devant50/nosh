import React from 'react';
import { Button, Card, ListGroupItem, ListGroup, Carousel, CardGroup } from 'react-bootstrap';
import Recipe_Card from './Recipe_Card.js';
import 'bootstrap/dist/css/bootstrap.css';



class Recipe_Carousel extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div className="Breakfast">
				<p>CAROUSEL HERE</p>
				<Carousel variant="dark" controls={false} indicators={false}>
					<Carousel.Item > 
						<CardGroup>
							<Recipe_Card />
						</CardGroup>
					</Carousel.Item>

					<Carousel.Item>
						<p>ITEM 1</p>
					</Carousel.Item>

					<Carousel.Item>	
						<p>ITEM 1</p>
					</Carousel.Item>
				</Carousel>
			</div>



			)
	}
}


export default Recipe_Carousel;