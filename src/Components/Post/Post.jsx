/* eslint-disable react/prop-types */
// import React from 'react'

import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post;
    const navigate = useNavigate();
    const handleShowDetails = ()=>{
      navigate(`/post/${id}`);
    }
  return (
    <div style={{border: '2px solid yellow',textAlign: 'center', borderRadius: '15px', padding: '20px'}}>
        <p>Id number: {id}</p>
        <h4>{title}</h4>
       <div style={{display: 'flex', gap: '10px'}}>
       <Link to={`/post/${id}`}>Post Details</Link>
        <Link to={`/post/${id}`}><button style={{padding: '8px 16px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '15px'}}>Post Details</button></Link>
       <button onClick={handleShowDetails}>Click To See Details</button>
       </div>
    </div>
  );
};

export default Post;