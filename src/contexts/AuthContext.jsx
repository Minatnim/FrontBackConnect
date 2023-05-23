import React, { createContext, useState, useContext, useEffect } from "react";
import { getMe } from "../api/todoApi";

const AuthContext = createContext();
//มันจะมี consumer กับ provider มาให้
//แต่ตอนนี้ไม่ใช้ consumer
{
  /* <AuthContext.Provider> */
}
export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return;
    // axios.get("http://localhost:8088/getMe", //ไปเอาจาก API มาใช้ ไม่ต้องยิง Axios
    getMe(token).then((rs) => {
      setUser(rs.data);
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    console.log(Boolean(user));
    setUser(null); //เป็น async react เป็นคนตัดสินใจเองใครจะ run ก่อน
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

{
  /* <AuthContextProvider>
  <App />
  <Login />
</AuthContextProvider>; */
}

export const useAuth = () => {
  return useContext(AuthContext);
};
