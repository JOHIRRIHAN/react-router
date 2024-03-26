// import React from 'react'

import { useLoaderData, useNavigate } from "react-router-dom"

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    const navigate = useNavigate();
    const  handleGoBack = ()=>{
      navigate(-1);
    }
  return (
    <div>
        <h4>PostDetails: {id}</h4>
        <p>title: {title}</p>
        <p><small>{body}</small></p>
        <button onClick={handleGoBack}>go back</button>
    </div>
  )
}

export default PostDetails