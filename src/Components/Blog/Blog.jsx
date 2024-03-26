import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Blog = () => {
  const users = useLoaderData();
  
  return (
    <div>
      <h1
        style={{
          width: "90%",
          height: "50vh",
          padding: "20px",
          backgroundColor: "yellow",
        }}
      >
        blog: {users.length}
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: " 10px",
          border: "2px solid red",
        }}
      >
        {users.map(user => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Blog;
