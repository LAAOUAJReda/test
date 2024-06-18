import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUser(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        const data = await res.data;
        setUser(prev => ({...prev, name: data.name, email: data.email}));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [id]);

  const sendUpdate = async() => {
    try{
      const res = await axios.put(`http://localhost:3000/users/${id}`, user);
      if(res.status === 200) {
        navigate('/')
      }
      
    } catch(err) {
      alert(err.message)
    }
  }

  const handleClick = () => {
    if(user.name && user.email) {
      sendUpdate();
    }
  };

  return error ? (
    <p>Something went wrong!</p>
  ) : isLoading ? (
    <i className="fas fa-spinner"></i>
  ) : (
    <div className="container my-4">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          aria-describedby="helpId"
          value={user.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
          aria-describedby="helpId"
          value={user.email}
          onChange={handleChange}
        />

        <button type="button" className="btn btn-warning my-2" onClick={handleClick}>
          Edit
        </button>
      </div>
    </div>
  );
};
export default SingleUser;
