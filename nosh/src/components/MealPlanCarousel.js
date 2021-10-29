import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Carousel } from 'react-bootstrap';

//import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import MealCard from './card.js'




class MealPlanCarousel extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div>
				<Carousel variant="dark" >
				  <Carousel.Item interval="10000"> 
				  	 <MealCard image={this.props.images[0]}/>
				  </Carousel.Item>

				  <Carousel.Item>
				    <MealCard image={this.props.images[1]}/>
				  </Carousel.Item>

				  <Carousel.Item>	
				  	<MealCard image={this.props.images[2]}/>
				  </Carousel.Item>

				</Carousel>
			</div>





			)
	}

}

export default MealPlanCarousel;