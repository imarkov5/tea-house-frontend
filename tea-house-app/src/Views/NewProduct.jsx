import React, {useState, useEffect} from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
import { LinkContainer, Link } from 'react-router-bootstrap';
import axios from 'axios';

export default function NewProduct(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [category_id, setCategoryId] = useState(1);
    const [description, setDescription] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [quantity, setQuantity] = useState();

    const addProduct = event => {
        event.preventDefault();
        console.log({name, description, serialNumber, price, quantity, imageUrl, category_id})
        axios.post("http://localhost:8080/products/new", {name, description, serialNumber, price, quantity, imageUrl, category_id})
    }

    return(
        <div>
            <Form className="w-50" onSubmit={addProduct}>
  <Form.Group>
    <Form.Label>Product Name</Form.Label>
    <Form.Control onChange={e=>setName(e.target.value)}/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Category</Form.Label>
    <Form.Control as="select" onChange={e=>setCategoryId(e.target.value)}>
      <option value="1">Green</option>
      <option value="2">White</option>
      <option value="3">Black</option>
      <option value="4">Yerba</option>
      <option value="5">Puerh</option>
    </Form.Control>
  </Form.Group>
  <Form.Group>
    <Form.Label>Price</Form.Label>
    <Form.Control onChange={e=>setPrice(e.target.value)}/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Qty</Form.Label>
    <Form.Control onChange={e=>setQuantity(e.target.value)}/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Serial #</Form.Label>
    <Form.Control onChange={e=>setSerialNumber(e.target.value)}/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={e=>setDescription(e.target.value)}/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Image URL</Form.Label>
    <Form.Control onChange={e=>setImageUrl(e.target.value)}/>
  </Form.Group>
  {/* <LinkContainer to = {"/admin"}></LinkContainer> */}
  <Button type="submit" variant="outline-dark" size="lg" text-align="right" block>Add Product</Button>
</Form>
        </div>
    )
}