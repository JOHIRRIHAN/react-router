import { useLoaderData } from "react-router-dom";

const Users = () => {
    const user = useLoaderData();
    const {name, id} = user;

  return (
    <div>
        <h4>Users: {name}</h4>
        <p>id: {id}</p>
    </div>
  )
}

export default Users;