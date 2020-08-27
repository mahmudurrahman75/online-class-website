import React from 'react';
import './Courses.css';
import Page from '../Page/Page';
import fakeData from '../../fakeData';
import { useState } from 'react';
// import data from '../../fakeData/data';
import Cart from '../Cart/Cart';

const Courses = () => {
    console.log(fakeData);
    const [course, setCourse] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const handleAddCourses = (courses) => {
        // console.log('added course', courses);
        const newCart = [...cart, courses];
        setCart(newCart);
    }
    
    return (
        <div className="courses-container">
            <div className="page-container">
                {
                    course.map(pd => <Page handleAddCourses = {handleAddCourses} courses= {pd}></Page>)
                }
            </div>
            <div className="cart-container">
               <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;