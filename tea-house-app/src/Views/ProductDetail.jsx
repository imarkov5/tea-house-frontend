import React from 'react';
import {Card, ListGroup, ListGroupItem, Button, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import data from '../data.json';
import {useParams} from 'react-router-dom'; 

export default function ProductDetail(props) {
    const {id} = useParams();
    console.log(props);
    const {products, onAdd} = props;
    console.log(products);
    // const product = data.products.find(x => x.id == window.location.pathname.substring(10));
    // const product = products.find(x => x.id == id);
    const product = products.filter(prod => prod.id ==id)[0];
    console.log(product);

    return (
        <div>
            <Row className="justify-content-md-center">
            <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {/* <ListGroupItem>Category: {product.category}</ListGroupItem> */}
                {/* <ListGroupItem>Category: {product.getCategory()}</ListGroupItem> */}
                <ListGroupItem>Serial Number: {product.serialNumber}</ListGroupItem>
                <ListGroupItem>Price: ${product.price.toFixed(2)}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button onClick={() => onAdd(product)} variant="outline-success" size="md">Add To Cart</Button>
                <LinkContainer to="/all_products"><Button variant="outline-secondary">Continue Shopping</Button></LinkContainer>
            </Card.Body>
            </Card>
            </Row>       
       </div>
    )
}
