import React from 'react';
import './People.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';



const People = (props) => {
    const { name, email, address, image, phone, salary } = props.user;
    return (
        <div className='people-main-container'>
            <div className='people-image'>
                <img src={image} alt="" />
            </div>

            <div className='people-details'>
                <h3 className='people-name'>{name} </h3>
                <p><small>Email: {email}</small></p>
                <p><small>Phone: {phone} </small></p>
                <p><small>Address: {address.street}, {address.city}</small></p>
                <p>Salary: ${salary} </p>
                <button 
                className='payment-button'
                onClick ={()=> props.handleAddFriend(props.user)}
                ><FontAwesomeIcon icon={faPlus} /> Add Friend</button>

            </div>
        </div>
    );
};

export default People;