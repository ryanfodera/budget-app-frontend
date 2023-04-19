import { useState } from "react";
import "../styles/AddNew.css";
import { createTransaction } from "../actions/transactions";
import { toast } from "react-toastify";

function AddNew() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTransaction = {
      date,
      item_name: name,
      amount,
      from,
    };
    const res = await createTransaction(newTransaction);
    if (res.success === true) {
      toast.success("Added new item!");
      setDate("");
      setName("");
      setAmount("");
      setFrom("");
    } else {
      toast.error("Error while adding new item");
    }
  };

  return (
    <main className="container">
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="from">From</label>
          <input
            type="text"
            name="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <button type="submit">CREATE NEW ITEM</button>
      </form>
    </main>
  );
}

export default AddNew;
