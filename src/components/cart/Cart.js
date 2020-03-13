import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    const totalSalary = cart.reduce((total, friend) => total + friend.salary, 0);

    return (
        <div>
            <h3 className='title'>Your Friend List</h3>
            <h5>Total Friend: <span className='totalFriend'>{cart.length}</span> </h5>
            <h4>Total Income of Friends: <span className='totalSalary'>${Number(totalSalary)}</span> </h4>
        </div>
    );
};

export default Cart;