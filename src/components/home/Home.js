import React, { useState } from 'react';
import './Home.css';
import fakeData from '../../fakeData/User';
import People from './people/People';
import Cart from '../cart/Cart';

const Home = () => {
    
    const users = fakeData
    //console.log(first10)
   // const [users, setUsers] = useState(first10);
    //console.log(users)

    const [cart, setCart] = useState([])
    
    const handleAddFriend = (people) =>{
       // console.log("friend added", people);
        const newCart = [...cart, people];
        setCart(newCart);
    }

    
    return (
        <div className='home-container'>
            <div className='user-container'>
                
                {
                    users.map(user => 
                    <People 
                    user={user}
                    handleAddFriend ={handleAddFriend}
                    ></People> )
                }
            </div>
            <div>
            <div className ='friendList-container'>
                
                <Cart cart={cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Home;