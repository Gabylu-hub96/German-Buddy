import { useState } from "react";
import axios from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Register({ setIsLoggedin }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    category: "",
    age: 0,
    phoneNumber: "",
    nationality: "",
    visaStatus: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    category: "",
    age: "",
    phoneNumber: "",
    nationality: "",
    visaStatus: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);
    axios
      .post("/auth/register", user)
      .then((res) => {
        console.log(res.data);
        setIsLoggedin(true);
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.errors);
      });
  };
  return (
    <Form>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlInput1"
        onSubmit={handleSubmit}>
        {/* <form className="form" onSubmit={handleSubmit}> */}
        <label htmlFor="">Username:</label>
        {error.userName && (
          <p className="text-danger">{error.userName.message}</p>
        )}
        <input
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
        />
        <label htmlFor="">First Name:</label>
        {error.firstName && (
          <p className="text-danger">{error.firstName.message}</p>
        )}
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
        <label htmlFor="">Last Name:</label>
        {error.lastName && (
          <p className="text-danger">{error.lastName.message}</p>
        )}
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
        <label htmlFor="">Category:</label>
        {error.category && (
          <p className="text-danger">{error.category.message}</p>
        )}

        <select name="category" onChange={handleChange}>
          <option>Select the category</option>
          <option value="student">student</option>
          <option value="family">family</option>
          <option value="professional">professional</option>
        </select>
        <label htmlFor="">Age:</label>
        {error.age && <p className="text-danger">{error.age.message}</p>}
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <label htmlFor="">Phone Number:</label>
        {error.phoneNumber && (
          <p className="text-danger">{error.phoneNumber.message}</p>
        )}
        <input
          type="tel"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
        />
        <label htmlFor="">Nationality:</label>
        {error.nationality && (
          <p className="text-danger">{error.nationality.message}</p>
        )}
        <input
          type="text"
          name="nationality"
          value={user.nationality}
          onChange={handleChange}
        />
        <label htmlFor="">Visa Status:</label>
        {error.visaStatus && (
          <p className="text-danger">{error.visaStatus.message}</p>
        )}
        <select name="visaStatus" onChange={handleChange}>
          <option>Select your visa status</option>
          <option value="approved">approved</option>
          <option value="pending">pending</option>
          <option value="denied">denied</option>
        </select>
        <label htmlFor="">Email:</label>
        {error.email && <p className="text-danger">{error.email.message}</p>}
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="">Password:</label>
        {error.password && (
          <p className="text-danger">{error.password.message}</p>
        )}
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <label htmlFor="">Confirm Password:</label>
        {error.confirmPassword && (
          <p className="text-danger">{error.confirmPassword.message}</p>
        )}
        <input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </Form.Group>
    </Form>
  );
}

export default Register;
