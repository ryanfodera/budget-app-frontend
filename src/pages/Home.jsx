import { Link } from "react-router-dom";
import "../styles/Home.css";
import { useEffect, useState } from "react";

// actions
import { getTransactions } from "../actions/transactions";

function Home() {
  const [transactions, setTransactions] = useState();
  useEffect(() => {
    getTransactions().then((res) => {
      if (res.success === true) {
        setTransactions(res.transactions.reverse());
      } else {
        console.log("error while fetching transactions");
      }
    });
  }, []);

  if (!transactions) {
    return (
      <main>
        <h2 className="loading">Loading...</h2>
      </main>
    );
  }

  const totalBalance = transactions.reduce((a, b) => (a += b.amount), 0);

  return (
    <main>
      <section>
        <h2 className="balance">
          Bank Account Total:{" "}
          <span
            style={{
              color:
                totalBalance < 0
                  ? "#AE0001"
                  : totalBalance <= 100
                  ? "#FFA600"
                  : "#218721",
            }}
          >
            {totalBalance}
          </span>
        </h2>
      </section>
      <section>
        <ul className="history">
          {transactions.length > 0 &&
            transactions.map((t) => {
              return (
                <li key={t._id}>
                  <p>{new Date(t.date).toLocaleDateString()}</p>
                  <Link to={"/" + t._id}>{t.item_name}</Link>
                  <p>{t.amount}</p>
                </li>
              );
            })}
        </ul>
      </section>
    </main>
  );
}
export default Home;
