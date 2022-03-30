import React from "react";
import { useState } from "react";
const Home = () => {
  // =========================================hooks=================================================////
  const [income, setincome] = useState(0);
  const [expenseamount, setExpenseamount] = useState(null);
  const [expense, setExpense] = useState(null);
  const [amount, setIncomeamount] = useState(null);
  const [balance, setBalance] = useState(income);
  const [expenseTwo, setexpenseTwo] = useState(0);
  const [title, setTitle] = useState("");
  const [history, setHistory] = useState([]);

  // =========================================hooks==================================================///

  // ========================================Functions==============================================////
  const incomehandle = () => {
    return setincome(amount);
  };
  const expensehandle = (t) => {
    const transication = { title, expenseamount };

    if (title && expenseamount) {
      setHistory((arr) => [...arr, transication]);
    }
    return [
      setExpense(expenseamount),
      setBalance(Number(income) - Number(expenseTwo)),
      setexpenseTwo(Number(expenseTwo) + Number(expenseamount)),
      setExpenseamount(null),
    ];
  };

  // ========================================Functions==============================================////

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Expense Tracker</h1>
      </div>
      {/* ============================================================================================ */}
      <div
        style={{
          backgroundColor: "lightgray",
          borderRadius: "10px",
          marginLeft: "35rem",
          marginRight: "35rem",

          padding: "20px",
        }}
      >
        <div style={{ paddingLeft: "1rem" }}>
          <p> Your Balance </p>
          <h1> {balance} </h1>
        </div>
        {/* =============================================================================================== */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>INCOME </h1>
            <h2> {income} </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>EXPENSE</h1>
            <h2> {expenseTwo} </h2>
          </div>
        </div>
        {/* ==================================================================================== */}
        <div>
          <div>
            <h2> History </h2>
            <div>
              <div>
                {history.map((val) => {
                  return (
                    <div
                      style={{
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "grey",
                        alignItems: "center",
                      }}
                    >
                      <p>{val.title} </p>
                      <p> {val.expenseamount}</p>{" "}
                    </div>
                  );
                })}{" "}
              </div>
            </div>
          </div>
        </div>
        {/* =======================================Add New Expense Section ================================================= */}
        <div style={{}}>
          <div>
            <h2>Add New Transication</h2>
          </div>
          <div>
            <p> Title </p>
            <input
              placeholder="Enter Title"
              style={{ width: "auto" }}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div>
            <p> Amount </p>
            <input
              type="number"
              onChange={(event) => {
                setExpenseamount(event.target.value);
              }}
              placeholder="Enter Amount"
              style={{ width: "auto" }}
            />
          </div>
          <div>
            <button
              onClick={expensehandle}
              style={{ width: "100%", padding: "0.5rem", marginTop: "1rem" }}
            >
              {" "}
              Add Transication{" "}
            </button>
          </div>
        </div>
        {/* ======================================Add Income Section  ============================================== */}
        <div>
          <div>
            <h2> Add Income </h2>
          </div>
          <div>
            <p>Enter New Income </p>
            <input
              type="number"
              placeholder="Enter amount"
              onChange={(event) => {
                setIncomeamount(event.target.value);
              }}
            />
            <div>
              <button
                onClick={incomehandle}
                style={{ width: "100%", padding: "0.5rem", marginTop: "1rem" }}
              >
                Add Income
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
