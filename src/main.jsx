import { createRoot } from "react-dom/client";
import "./index.css";
import Table from "./components/table";

createRoot(document.getElementById("root")).render(
  <div className="container">
    <Table />
  </div>
);
