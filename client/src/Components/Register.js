import { useState } from "react";
import axios from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    <Form onSubmit={handleSubmit} className="register-form-container">
      <Form.Group
        className="form-left-container mb-3"
        controlId="register-form"
        id="register-form-content">
        <div className="form-input-content">
          <div className="form-left-content">
            <Form.Label className="form-label">Username:</Form.Label>
            {error.userName && (
              <p className="text-danger">{error.userName.message}</p>
            )}
            <Form.Control
              type="text"
              name="userName"
              value={user.userName}
              onChange={handleChange}
            />
            <Form.Label>First Name:</Form.Label>
            {error.firstName && (
              <p className="text-danger">{error.firstName.message}</p>
            )}
            <Form.Control
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
            />
            <Form.Label>Last Name:</Form.Label>
            {error.lastName && (
              <p className="text-danger">{error.lastName.message}</p>
            )}
            <Form.Control
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
            />
            <Form.Label>Category:</Form.Label>
            {error.category && (
              <p className="text-danger">{error.category.message}</p>
            )}

            <Form.Select name="category" onChange={handleChange}>
              <option>Select the category</option>
              <option value="student">student</option>
              <option value="family">family</option>
              <option value="professional">professional</option>
            </Form.Select>
            <Form.Label>Age:</Form.Label>
            {error.age && <p className="text-danger">{error.age.message}</p>}
            <Form.Control
              type="number"
              name="age"
              value={user.age}
              onChange={handleChange}
            />
            <Form.Label>Phone Number:</Form.Label>
            {error.phoneNumber && (
              <p className="text-danger">{error.phoneNumber.message}</p>
            )}
            <Form.Control
              type="tel"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-right-content">
            <Form.Label>Nationality:</Form.Label>
            {error.nationality && (
              <p className="text-danger">{error.nationality.message}</p>
            )}
            <Form.Control
              type="text"
              name="nationality"
              value={user.nationality}
              onChange={handleChange}
            />
            <Form.Label>Visa Status:</Form.Label>
            {error.visaStatus && (
              <p className="text-danger">{error.visaStatus.message}</p>
            )}
            <Form.Select name="visaStatus" onChange={handleChange}>
              <option>Select your visa status</option>
              <option value="approved">approved</option>
              <option value="pending">pending</option>
              <option value="denied">denied</option>
            </Form.Select>
            <Form.Label>Email:</Form.Label>
            {error.email && (
              <p className="text-danger">{error.email.message}</p>
            )}
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <Form.Label>Password:</Form.Label>
            {error.password && (
              <p className="text-danger">{error.password.message}</p>
            )}
            <Form.Control
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <Form.Label>Confirm Password:</Form.Label>
            {error.confirmPassword && (
              <p className="text-danger">{error.confirmPassword.message}</p>
            )}
            <Form.Control
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
            />
            <Button type="submit" id="register-form-bttn">
              Register
            </Button>
          </div>
        </div>
        <div className="form-right-container"></div>
      </Form.Group>
    </Form>
  );
}

export default Register;
