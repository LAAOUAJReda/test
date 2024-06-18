import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://localhost:3000/users");
      const data = await res.data;
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async(id) => {
    const req = await axios.delete(`http://localhost:3000/users/${id}`)
    if(req.status === 200) {
      setUsers(prev => prev.filter(user => user.id !== id))
    }
  };

  return (
    <div className="container my-4">
      <Link to="/createUser" className="btn btn-primary mb-2">Create New</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td>Something went wrong!</td>
            </tr>
          ) : isLoading ? (
            <tr>
              <td>is Loading...</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td scope="row">{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/users/${user.id}`} className="btn btn-warning me-2">
                    Edit
                  </Link>
                  <button type="button" className="btn btn-danger" onClick={()=> deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
