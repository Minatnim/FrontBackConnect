import React from "react";
import Navbar from "./Navbar";
import Penguin from "./svg/Penguin";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { user } = useAuth();
  return (
    <div className="flex justify-between items-end bg-green-200 py-2 px-4 h-[80px]">
      <div className="w-16 self-center">
        <Penguin />
      </div>
      <div>
        <p>{user?.name || "Guest"}</p>
        <Navbar />
      </div>
    </div>
  );
}
