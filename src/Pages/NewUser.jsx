import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewUser = () => {
  const [newUser, setNewUser] = useState({name: "", email: ""});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = () => {
    axios.post('http://localhost:3000/users', newUser)
    .then(res => {console.log(res); navigate("/")})

  };

  return (
    <div className="container my-4">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          aria-describedby="helpId"
          onChange={handleChange}
          value={newUser.name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
          aria-describedby="helpId"
          onChange={handleChange}
          value={newUser.email}
        />

        <button type="button" className="btn btn-success my-2" onClick={handleClick}>
          Create New
        </button>
      </div>
    </div>
  )
}
export default NewUser