/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const User = ({user}) => {
    // eslint-disable-next-line no-undef
    const {id, name, email, phone} = user;
  return (
    <div style={{border: '2px solid yellow',borderRadius: '15px', margin: '10px', padding: '10px', textAlign: 'center'}}>
        <h1>{id}</h1>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  )
}

export default User