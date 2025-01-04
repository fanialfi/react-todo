import { createRoot } from "react-dom/client";
import "./index.css";
import CardTaskForm from "./components/fragments/CardTaskForm";

createRoot(document.getElementById("root")).render(
  <div className="container">
    <CardTaskForm />
  </div>
);
