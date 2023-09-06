import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Balance from "../component/expanse/Balance";
import { Toaster } from "react-hot-toast";

function Bills() {
  const [allExpense, setAllExpense] = useState([]);
  const [user, setUser] = useState([]);
  const getAllBills = async () => {
    const response = await fetch(
      "https://bills-splitter-backend.onrender.com/getAllBills",
      {
        credentials: "include",
      }
    );
    const result = await response.json();
    if (result.success === false) {
      return (window.location.href = "/login");
    }
    setAllExpense(result.response);
    setUser(result.data[0]);
  };
  useEffect(() => {
    getAllBills();
  }, []);
  return (
    <div className="min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%]">
      <Header />
      <Balance user={user} allExpense={allExpense} />
      <Toaster />
    </div>
  );
}

export default Bills;
