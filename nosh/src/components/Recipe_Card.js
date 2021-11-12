import React from 'react';
import { Button, Card, CardGroup, ListGroup, ListGroupItem, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Recipe_Card extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		return(
            <div>
                <button onClick={() => {
                    console.log(this.props.recipe.url)
                }}>
                    <Card style={{ width: '8rem' }}>
                    <Card.Img variant="top" src={this.props.recipe.image} />
                    <Card.Body>
                        <Card.Title className="h6" >{this.props.recipe.label}</Card.Title>
                    </Card.Body>
                    </Card>
                </button>
            </div>


			)
	}
}


export default Recipe_Card;