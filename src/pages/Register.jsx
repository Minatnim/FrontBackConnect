import { useState } from "react";
import { register } from "../api/todoApi";

export default function Register() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    const { username, password, confirmPassword } = input;
    e.preventDefault();
    if (password !== confirmPassword) alert("Password not match, recheck");
    // axios.post("http://localhost:8088/auth/register",
    register({
      username: username,
      password: password,
    })
      .then((rs) => {
        console.log(rs);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-5 ">
      <form className="max-w-lg mx-auto" onSubmit={hdlSubmit}>
        <h2 className="text-3xl mb-4">Register Form</h2>
        <div className="flex w-full mb-4">
          <i className="fa fa-user text-black min-w-16 text-center p-2.5 rounded-md bg-green-200" />
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
          <i className="fa fa-key text-black min-w-16 text-center p-2.5 rounded-md bg-green-200" />
          <input
            className="w-full p-2.5 border focus:border-2 rounded-md"
            type="password"
            placeholder="Password"
            name="password"
            onChange={hdlChangeInput}
            value={input.password}
          />
        </div>
        <div className="flex w-full mb-4">
          <i className="fa fa-key text-black min-w-16 text-center p-2.5 rounded-md bg-green-200" />
          <input
            className="w-full p-2.5 border focus:border-2 rounded-md"
            type="password"
            placeholder="Password"
            name="confirmPassword"
            onChange={hdlChangeInput}
            value={input.confirmPassword}
          />
        </div>
        <button type="submit" className="  text-black btn rounded-md">
          Register
        </button>
      </form>
    </div>
  );
}
