import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TotalExpense = () => {
  const {expenses} = useContext(AppContext)

  const AllExpenses = expenses.reduce((total, item)=> {
    return (total = total + item.cost)
  }, 0)

  

  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${AllExpenses}</span>
    </div>
  );
};

export default TotalExpense;
