import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return <Pizza />;
}

function Pizza() {
  return <h1>Pizza</h1>;
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
