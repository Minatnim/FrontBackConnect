import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

export default function Login() {
  const { user, setUser } = useAuth();

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    // validation
    axios
      .post("http://localhost:8088/auth/login", input)
      .then((rs) => {
        localStorage.setItem("token", rs.data.token);
        return axios.get("http://localhost:8088/auth/getMe", {
          headers: {
            Authorization: `Bearer ${rs.data.token}`,
          },
        });
      })
      .then((rs) => {
        console.log(rs.data);
        setUser(rs.data);
      })
      .catch((err) => alert(err.response.data.error || err.message));
  };

  return (
    <div className="mt-5 ">
      <form className="max-w-lg mx-auto" onSubmit={hdlSubmit}>
        <h2 className="text-3xl mb-4">Login Form</h2>
        <div className="flex w-full mb-4">
          <i className="fa fa-user text-white min-w-16 text-center p-2.5 rounded-md bg-green-200" />
          <input
            className="w-full p-2.5 border focus:border-2 rounded-md"
            type="text"
            placeholder="Username"
            name="username"
            onChange={hdlChangeInput}
            value={input.username}
          />
        </div>

        <div className="flex w-full mb-4">
          <i className="fa fa-key text-white min-w-16 text-center p-2.5 rounded-md bg-green-200" />
          <input
            className="w-full p-2.5 border focus:border-2 rounded-md"
            type="password"
            placeholder="Password"
            name="password"
            onChange={hdlChangeInput}
            value={input.password}
          />
        </div>

        <button type="submit" className="btn rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}
