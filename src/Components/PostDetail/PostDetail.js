import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import logo from '../image/mamun.jpg';
import logo1 from '../image/shaon.jpg';
import logo2 from '../image/shahid.jpg';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId]);


    const postDetailStyle = {
        border: '10px solid gray',
        borderRadius: '20px',
        margin: '80px',
        padding: '10px',
        background: 'linear-gradient(135deg, rgba(255,0,0,0), rgba(255,0,0,1))'
    }

    return (
        <div style={postDetailStyle}>
            <p>Post Id: {post.id}</p>
            <h1>Title: "{post.title}"</h1>
            <h5> Description: {post.body}</h5>
            <p> User Id: {post.userId}</p>
            <img style={{ borderRadius: '50px' }} src={logo} alt="" width="35px" /><img style={{ borderRadius: '50px' }} src={logo1} alt="" width="35px" /><img style={{ borderRadius: '50px' }} src={logo2} alt="" width="35px" />
            <div>
                {
                    comment.map(comment => <Comments comment={comment}></Comments>)
                }
            </div>
        </div>

    );
};

export default PostDetail;