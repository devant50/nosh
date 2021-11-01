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
                <table>
                    <tr>
                        <td>
                            <p>Google</p>
                        </td>
                        <td>
                            <p>Bing</p>
                        </td>
                        <td>
                            <p>OK</p>
                        </td>
                    </tr>


                </table>
            </div>


			)
	}
}


export default Recipe_Card;