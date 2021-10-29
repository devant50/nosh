import React from 'react';
import { Button, Card, ListGroupItem, ListGroup, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';



class Recipe_Carousel extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div className="Breakfast">
				<p>CAROUSEL HERE</p>
				<Carousel variant="dark" >
					<Carousel.Item > 
						<p>ITEM 1</p>
						<p>ITEM 1</p>
						<p>ITEM 1</p>
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