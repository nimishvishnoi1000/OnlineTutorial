import Base from "../Base/Base";
import AllUsers from "../User/AllUsers";
import UpdateUser from "../User/UpdateUser";
import ViewUser from "../User/ViewUser";
import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDashboard from '../components/User/UserDashboard'
import AdminDashboard  from "../components/Admin/AdminDashboard";
import  ViewUsers  from "../components/Admin/ViewUsers";
import UpdateProfile from '../components/UpdateProfile'
import ForgotPassword from '../components/ForgotPassword'
import Login from "./Login";

import PrivateRoutes from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Base>
        <Router>
          <AuthProvider>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<UserDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/update-profile" element={<UpdateProfile />} />
                <Route path="/viewusers" element={<ViewUsers />} />

                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Route>

              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>
      </Base>
    </div>
  );
}

export default App;
