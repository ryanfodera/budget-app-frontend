import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import AddNew from "./pages/AddNew";
import EditOne from "./pages/EditOne";
import ViewOne from "./pages/ViewOne";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddNew />} />
          <Route path="/:id" element={<ViewOne />} />
          <Route path="/edit/:id" element={<EditOne />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
