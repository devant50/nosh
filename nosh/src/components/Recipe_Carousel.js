import React, { useState } from 'react';
import { Button, Card, ListGroupItem, ListGroup, Carousel, CardGroup } from 'react-bootstrap';
import Recipe_Card from './Recipe_Card.js';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
//import { json } from 'stream/consumers';

//SPOONACULAR 150 CALLS DAILY
//const apiKey = '2563f9944a2e4a80881a53c8c2866b9b';
//const complexSearch = 'https://api.spoonacular.com/recipes/complexSearch';

//EDAMAM 10,000 CALLS DAILY RECIPE API
const appID ='0dc59db1';
const apiKey ='2c43710bdfef33a88d62040f6274647b';
const base = 'https://api.edamam.com/api/recipes/v2?type=public&';


function search(base, diet, meal){
	const link = base+'?app_id='+appID+apiKey+`&q=${diet}&mealType=${meal}`
	//console.log(link);
	return link;
}

class Recipe_Carousel extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			diet: this.props.diet,
			mealType: this.props.mealType,
			recipesArray: [],
			num: 0,
			isLoaded: false
		}
	}

	componentDidMount() {
		const link = search(base,this.state.diet,this.state.mealType);
		//console.log(this.state.diet+" "+this.state.mealType);
		//console.log(link);
		
		fetch(link)
			.then((res) => res.json())
			.then((json) =>{
				this.setState({
					isLoaded:true,
					recipesArray: json.hits,
					num: 0
				})
			})
			//.then((data) => console.log(this.state.recipesArray))

	}

	render(){

		//jsonPlaceholder();
		let { isLoaded, recipesArray } = this.state;



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
								{recipesArray.map((item) => (
									<td>
										<Recipe_Card recipe={item.recipe} />
										{console.log(item.recipe)}
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