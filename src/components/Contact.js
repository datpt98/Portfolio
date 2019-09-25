import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Contact = () => {
	return(
		<Container>
			<br/><br/>
			<h2> Contact </h2>
			<br/><br/>
			
			<Form className="form">
				<Form.Group controlId="name">
			    <Form.Label>Name</Form.Label>
			    <Form.Control className="formControl" type="text" />
			  </Form.Group>
			  <br/>
			  <Form.Group controlId="email">
			    <Form.Label>Email address</Form.Label>
			    <Form.Control className="formControl" type="email" />
			  </Form.Group>
			  <br/>
			  <Form.Group controlId="description">
			    <Form.Label>Description</Form.Label>
			    <Form.Control className="formControl" as="textarea" rows="4" />
			  </Form.Group>
			  <br/>
			  
			  <button type="submit" className="button">
			    Submit
			  </button>
			</Form>
			<br/>
		</Container>
	)
}

export default Contact;