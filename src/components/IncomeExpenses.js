import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  let expenses = 0;
  let incomes = 0;
  transactions.map((transaction) => {
    transaction.amount < 0
      ? (expenses += transaction.amount)
      : (incomes += transaction.amount);
  });

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${incomes}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expenses)}</p>
      </div>
    </div>
  );
};
