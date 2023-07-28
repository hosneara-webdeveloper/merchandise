/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './UserDetails.css'

const UserDetails = () => {
    const user = useLoaderData();
    return (
        <div className='Details py-5 bg-info text-center'>

            <div className='py-5 bg-info'>
            <h1>Check out User Details:</h1>
            <h3>Name: {user.name}</h3>
            <h5>Email: {user.email}</h5>
            <h5>Username: {user.username}</h5>
            <h5>Address: street: {user.address.street}</h5>
            <h5>Suite: {user.address.suite}</h5>
            <h5>City: {user.address.city}</h5>
            <h5>Zipcode: {user.address.zipcode}</h5>
            <h5>Id: {user.id}</h5>
            <h5>website: {user.website}</h5>
            <h5>Phone: {user.phone}</h5>
            <h5>company: {user.name}</h5>
            
            </div>
        </div>
    );
};

export default UserDetails;