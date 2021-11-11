import React, { useState } from 'react';
import { Button, Card, ListGroupItem, ListGroup, Carousel, CardGroup } from 'react-bootstrap';
import Recipe_Card from './Recipe_Card.js';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

//RECIPE API
const apiKey = '2563f9944a2e4a80881a53c8c2866b9b';
const complexSearch = 'https://api.spoonacular.com/recipes/complexSearch';
function breakfastSearch(){
	const link = complexSearch+'?apiKey='+apiKey+'&query=pasta&maxFat=25&number=2'
	console.log(link);
	return link;
}

function jsonPlaceholder(){
	const link = 'https://jsonplaceholder.typicode.com/users';
	console.log(link);
	return link;
}


class Recipe_Carousel extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false
		}
	}

	componentDidMount() {
		fetch(jsonPlaceholder())
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					isLoaded:true,
					items: json
				})
			})
	}

	render(){

		//jsonPlaceholder();
		let { isLoaded, items } = this.state;

		if(!isLoaded){
			return(
				<div>Loading...</div>
			)
		}else{
			return(
				<div>
					<table>
						<tbody>
							<tr>
							{items.map((item) => (
								<td>
									{/* <Recipe_Card name={item.name}/> */}
								</td>
								
							))};
							</tr>
						</tbody>
					</table>
				</div>
			)
		}

	}
}


export default Recipe_Carousel;