import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import * as Sentry from "@sentry/react";
import { BrowserRouter, Route, Routes } from "react-router";
import AllChamp from "./pages/AllChamp";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddChamp from "./pages/AddChamp";
import { ToastContainer } from "react-toastify";

Sentry.init({
  dsn: "https://ada53765a6aab74c94c9b8be4dc26947@o4510912042369024.ingest.de.sentry.io/4510951888060496",
  sendDefaultPii: true
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllChamp/>}></Route>
        <Route path="add" element={<AddChamp/>}></Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer theme="colored"/>
  </StrictMode>,
);
