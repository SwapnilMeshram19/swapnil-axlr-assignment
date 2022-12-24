import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { LoginComponent } from "../components/LoginComponent";
import { Navbar } from "../components/Navbar";
import { Categories } from "./Categories";
import { useAppSelector } from "../app/hooks";

export const Pages = () => {
  const token = useAppSelector((state) => state.loggedIn.token);

  const navigate = useNavigate();
  return (
    <div>
      {token && <Navbar />}

      <Routes>
        <Route path="/login" element={<LoginComponent />}></Route>
        <Route
          path="/categories"
          element={token ? <Categories /> : <Navigate replace to="/login" />}
        ></Route>
      </Routes>
    </div>
  );
};
