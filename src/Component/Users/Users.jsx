/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css'

const Users = () => {

    const user = useLoaderData()
    console.log(user);
    return (
        <div className='userPg1'>
            <div className='container'>
            <h2 className=' py-5 text-center'>There are some Users {user.length}</h2>
            <div className=" row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {
                    user.map(user => <User
                        key ={user.id}
                        user={user}
                    ></User>)
                }

            </div>
        </div>
        </div>
    );
};

export default Users;
