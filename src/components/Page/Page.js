import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import './Page.css';

const Page = (props) => {
    // console.log(props);
    const {title,price,img} = props.courses;
    const handleAddCourses = props.handleAddCourses;

    return (
        <div className="courses">
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div>
                <h1 className="course-name">course Name: {title}</h1>
                <h4>Price: {price}</h4>
                <button className="main-button"  onClick = {() => handleAddCourses(props.courses)}><FontAwesomeIcon icon={faLaptopCode} /> Enrole Now</button>
            </div>
        </div>
    );
};

export default Page;