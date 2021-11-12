import React from 'react';
import { Button, Card, ListGroup, ListGroupItem, Table, Carousel } from 'react-bootstrap';
import Recipe_Carousel from './Recipe_Carousel';
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
				    <Card.Title>Card Title</Card.Title>
				    <Card.Text>
				      Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				  </Card.Body>
				  <ListGroup className="list-group-flush">
				    <ListGroupItem></ListGroupItem>
				    <ListGroupItem>
						<div className="Breakfast">
						<Table striped bordered hover>
							<thead>
								<tr>
									<td>
										<h3>Calories</h3>
									</td>
									<td>
										<h3>Carbs</h3>
									</td>
									<td>
										<h3>Protein</h3>
									</td>
								</tr>
							</thead>
						</Table>
						</div>
					</ListGroupItem>

					
				    <ListGroupItem>
						<div className="btn-group">
							<a href="#" class="btn btn-primary active" aria-current="page">Active link</a>
							<a href="#" class="btn btn-primary">Link</a>
						</div>
					</ListGroupItem>
					<ListGroupItem>
						<h2>Meals</h2>
					</ListGroupItem>

					<ListGroupItem>
						<h5> {this.props.diet} Breakfast</h5>
						<Recipe_Carousel  diet={this.props.diet} mealType="breakfast"/>
					</ListGroupItem>

					
					<ListGroupItem>
						<h5>{this.props.diet} Lunch</h5>
						<Recipe_Carousel diet={this.props.diet} mealType="Lunch"/>
					</ListGroupItem>


					<ListGroupItem>
						<h5>{this.props.diet} Dinner</h5>
						<Recipe_Carousel diet={this.props.diet} mealType="Dinner" />
					</ListGroupItem>

					

				  </ListGroup>
				  <Card.Body>
				    <Card.Link href="#">Card Link</Card.Link>
				    <Card.Link href="#">Another Link</Card.Link>
				  </Card.Body>
				</Card>
			</div>




			)
	}
}


export default MealCard