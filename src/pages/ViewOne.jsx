import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/ViewOne.css";
import { toast } from "react-toastify";

// actions
import {
  deleteSingleTransaction,
  getSingleTransaction,
} from "../actions/transactions";

function ViewOne() {
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

  const handleDelete = async () => {
    const res = await deleteSingleTransaction(transaction._id);
    if (res.success === true) {
      toast.success("Successfully Deleted!");
      navigate("/");
    } else {
      toast.error("Error while deleting transaction");
    }
  };

  if (!transaction?._id) {
    return (
      <main>
        <h2 className="loading">Loading...</h2>
      </main>
    );
  }

  return (
    <main className="container">
      <section className="transaction-card">
        <p>
          <strong>Transaction ID:</strong> {transaction._id}
        </p>
        <p>
          <strong>Name:</strong> {transaction.item_name}
        </p>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(transaction.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Amount:</strong> {transaction.amount}
        </p>
        <p>
          <strong>From:</strong> {transaction.from}
        </p>
      </section>
      <div className="btn-group">
        <Link className="edit-button" to={"/edit/" + transaction._id}>
          Edit This Transaction
        </Link>
        <button className="del-button" onClick={handleDelete}>
          Delete This Transaction
        </button>
      </div>
    </main>
  );
}

export default ViewOne;
