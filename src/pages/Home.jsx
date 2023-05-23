import { useEffect, useState } from "react";
import SummaryCard from "../components/SummaryCard";
import { getJobs } from "../api/todoApi";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;
    getJobs(token).then((rs) => {
      console.log(rs.data);
      setJobs(rs.data);
    });
  }, []);

  return (
    <>
      <div className="flex justify-around gap-2 mt-3">
        <SummaryCard title="All Jobs" amount="20" />
        <SummaryCard title="Ongoing Jobs" amount="12" />
        <SummaryCard title="Jobs Done" amount="8" />
      </div>
      <div>
        {jobs.map((el) => (
          <p className="p-3 bg-pink-200 m-3" key={el.id}>
            {el.title}
          </p>
        ))}
      </div>
    </>
  );
}
