import React from 'react'
import {Card,Button} from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function User(props) {
    console.log(props)
    return (
        <div className="item">
        <Card style={{ width: '15rem',height:"28rem" }}>
        <Card.Body>
            <Card.Title>{props.username} </Card.Title>
                
                <hr/>
                <Card.Text><span>Real name: </span>{props.name}</Card.Text>
                <Card.Text><span>Email:</span>{props.email}</Card.Text> 
                <Card.Text><span>Phone: </span> {props.phone}</Card.Text>
                <dl>
                    <dt style={{textAlign:"left"}} >Adress:</dt>
                    <dd><span>City: </span>{props.address.city}</dd>
                    <dd><span>Street:</span> {props.address.street}</dd>
                    <dd><span>Suite:</span> {props.address.suite}</dd>
                    <dd><span>Zipcode:</span> {props.address.zipcode}</dd>
                </dl> 
            </Card.Body>
      </Card>
      </div>
    )
}

export default User
