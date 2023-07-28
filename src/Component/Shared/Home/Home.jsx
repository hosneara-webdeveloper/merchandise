/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
       <div className='homo'>
         <div className='container'>
          <div>
            <h2 className='pb-5 text-center'>Take Your perfect Pleasure</h2>
          </div>
            <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmejqsh-FvEkoijNfLJo8PJ9ago2VSNQzQXw&usqp=CAU" />
            <Card.Body>
              <Card.Title className='text-center'>Your Demand</Card.Title>
              <Card.Text>
                <p className='text-center align-items-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum nihil libero quod expedita quia facilis dolor quas, ab deleniti dicta cum at dolorum perspiciatis quis laboriosam, totam alias, consequuntur aspernatur?</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
            
        </div>
       </div>
    );
};

export default Home;