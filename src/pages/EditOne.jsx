import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// actions
import {
  getSingleTransaction,
  updateSingleTransaction,
} from "../actions/transactions";

function EditOne() {
  const params = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({});
  useEffect(() => {
    getSingleTransaction(params.id).then((res) => {
      if (res.success === true) {
        setTransaction(res.transaction[0]);
      } else {
        console.log("error while fetching transaction");
      }
    });
  }, []);

  if (!transaction?._id) {
    return (
      <main>
        <h2 className="loading">Loading...</h2>
      </main>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await updateSingleTransaction(transaction);
    if (res.success === true) {
      toast.success("Successfully updated!");
      navigate("/" + transaction._id);
    } else {
      toast.error("Error while updating");
    }
  };

  const handleChange = (e) =>
    setTransaction((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <main className="container">
      <h1>Edit Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={new Date(transaction.date).toISOString().split("T")[0]}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="item_name"
            value={transaction.item_name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="from">From</label>
          <input
            type="text"
            name="from"
            value={transaction.from}
            onChange={handleChange}
          />
        </div>
        <button type="submit">EDIT ITEM</button>
      </form>
    </main>
  );
}

export default EditOne;
