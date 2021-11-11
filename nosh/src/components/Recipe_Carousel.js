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
				<Carousel variant="dark" controls={false} indicators={false}>
					<Carousel.Item >
						 				
						<table>
							<tr>
								<td>
									<Recipe_Card />
								</td>
								<td>
									<Recipe_Card />
								</td>
								<td>
									<Recipe_Card />
								</td>
							</tr>
						</table>
					</Carousel.Item>

					<Carousel.Item > 
										
						<table>
							<tr>
								<td>
									<Recipe_Card />
								</td>
								<td>
									<Recipe_Card />
								</td>
								<td>
									<Recipe_Card />
								</td>
							</tr>
						</table>
					</Carousel.Item>

					<Carousel.Item >
										
						<table>
							<tr>
								<td>
									<Recipe_Card />
								</td>
								<td>
									<Recipe_Card />
								</td>
								<td>
									<Recipe_Card />
								</td>
							</tr>
						</table>
					</Carousel.Item>
				</Carousel>
			</div>



			)
	}
}


export default Recipe_Carousel;