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
				  <Carousel.Item > 
				  	 <MealCard image={this.props.filler}/>
				  </Carousel.Item>

				  <Carousel.Item>
				    <MealCard image={this.props.filler}/>
				  </Carousel.Item>

				  <Carousel.Item>	
				  	<MealCard image={this.props.filler}/>
				  </Carousel.Item>

				</Carousel>
			</div>





			)
	}

}

export default MealPlanCarousel;