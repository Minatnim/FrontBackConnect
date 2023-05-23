import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addJob } from "../api/todoApi";

export default function AddTodoForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    dueDate: "",
  });

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    // validation
    let token = localStorage.getItem("token");
    addJob(input, token).then((rs) => {
      console.log(rs);
      navigate("/");
    });
  };
  return (
    <div className="mt-5 ">
      <form className="max-w-lg mx-auto" onSubmit={hdlSubmit}>
        <h2 className="text-3xl mb-4">Add New Job</h2>
        <div className="flex w-full mb-4">
          <i className="fa fa-comment text-black min-w-16 text-center p-2.5 rounded-md bg-green-200" />
          <input
            className="w-full p-2.5 border focus:border-2 rounded-md"
            type="text"
            placeholder="Job name"
            name="title"
            onChange={hdlChangeInput}
            value={input.username}
          />
        </div>

        <div className="flex w-full mb-4">
          <i className="fa fa-calendar-check text-black min-w-16 text-center p-2.5 rounded-md bg-green-200" />
          <input
            className="w-full p-2.5 border focus:border-2 rounded-md"
            type="date"
            placeholder="DueDate"
            name="dueDate"
            onChange={hdlChangeInput}
            value={input.password}
          />
        </div>

        <button type="submit" className=" text-black btn rounded-md">
          Add Job
        </button>
      </form>
    </div>
  );
}
