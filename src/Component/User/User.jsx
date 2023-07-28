/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';


const User = ({ user }) => {
    const { id, name, email, username } = user;

    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSJnIDocjgIKW7yat9-rlDsRGsCSehHrfTQ&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body bg-">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{email}</p>
                        <p className="card-text">{username}</p>
                        <p className="card-text">{id}</p>
                    </div>
                    <button className='btn btn-outline-danger '><Link to={`/user/${id}`}>Show Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default User;