import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function JobItem(props) {
  const { job } = props;
  const navigate = useNavigate();
  const hdlDelete = () => {
    let token = localStorage.getItem("token");
    deleteJob(job.id, token).then((rs) => {
      // Navigate("/");
      // window.location.reload('/')
      setReload((prv) => !prv);
    });
  };
  return (
    <div className="collapse w-full rounded gap-1 my-1">
      <input type="checkbox" className="peer" />
      <div
        className={`collapse-title ${
          job.status ? "bg-success" : "bg-pink-200"
        } text-primary-content peer-checked:bg-pink-300 peer-checked:text-secondary-content`}
      >
        {job.title}
      </div>
      <div className="collapse-content bg-pink-200 text-primary-content peer-checked:bg-pink-200 peer-checked:text-secondary-content">
        <div className="flex justify-around">
          <p>Remaining day: {job.remainDay}</p>
          <p>Due date: {job.dueDate}</p>
          <p>Status: {job.status ? "Done" : "OnGoing"}</p>
          <div className="w-20">
            <Link className="btn btn-circle" to={`/updatetodo/${job.id}`}>
              Edit
            </Link>

            <div className="w-20">
              <button className="btn btn-circle btn-error" onClick={hdlDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
