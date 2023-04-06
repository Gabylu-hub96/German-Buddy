import { useState } from "react";
import axios from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login({ setIsLoggedin }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", user)
      .then((res) => {
        console.log(res.data);
        setIsLoggedin(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <Form onSubmit={handleSubmit} className="login-form-container">
      <Form.Group
        controlId="login-form"
        id="login-form-content"
        className="mb-3">
        <div className="login-left-container">
          <Form.Label className="form-label">Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <Form.Label className="form-label">Password:</Form.Label>
          <Form.Control
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <Button type="submit" id="login-form-bttn">
            Login
          </Button>
        </div>
        <div className="login-right-container"></div>
      </Form.Group>
    </Form>
  );
}

export default Login;
