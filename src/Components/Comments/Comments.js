import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import logo from '../image/mamun.jpg';
import logo1 from '../image/shahid.jpg';
import logo2 from '../image/shaon.jpg';



const Comments = (props) => {
    const { name, email, body, id } = props.comment;


    return (
        <div>
            <h1>Comments: {body}</h1>
            <img style={{ borderRadius: '50px' }} src={logo} alt="" width="35px" /><img style={{ borderRadius: '50px' }} src={logo1} alt="" width="35px" /><img style={{ borderRadius: '50px' }} src={logo2} alt="" width="35px" />
            <h5>Post id: {id}</h5>
            <h2>User Name: {name}</h2>
            <h4>User Email: {email}</h4>
            <Button variant="contained" color="primary" href="#contained-buttons">
                <Link to="/home">Back To Home</Link>
            </Button>
            <hr />
        </div>
    );
};

export default Comments;