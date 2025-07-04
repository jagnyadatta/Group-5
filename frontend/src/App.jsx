import "./App.css";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/Layout";
import AiHomePage from "./components/AIpage/AiHomePage";
import CareerCounsellor from "./components/Career/CareerCounsellor";
import CounsellorProfile from "./components/Career/CounsellorProfile";
import CounsellorSignup from "./components/auth/CounsellorSignup";
import SignupChoice from "./components/auth/SignupChoice";
import StudentSignup from "./components/auth/StudentSignup";
import CounsellorLayout from "./components/shared/CounsellorLayout";
import CounsellorLogin from "./components/auth/CounsellorLogin";
import LoginChoice from "./components/auth/LoginChoice";
import StudentLayout from "./components/shared/StudentLayout";
import StudentLogin from "./components/auth/StudentLogin";
import AddCounsellors from "./components/Career/AddCounsellors";
import CounsellorDashboard from "./components/Career/CounsellorDashboard";
import StudentDashboard from "./components/Home/StudentDashboard";
import AdminDashboard from "./components/Home/AdminDashboard";
import CounsellorDetails from "./components/Career/CounsellorDetails";
import StudentSlotBooking from "./components/Home/StudentSlotBooking";
import AdminLogin from "./components/auth/AdminLogin";
import { useEffect } from "react";
import { ThemeProvider } from "./components/shared/ThemeContext";
import CounsellorForgotPassword from "./components/auth/CounsellorForgotPassword";
import StudentForgotPassword from "./components/auth/StudentForgotPassword";


// import { RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "aisuggest",
        element: <AiHomePage />,
      },
      {
        path: "profilecouncil/:id",
        element: <CounsellorProfile />,
      },
      {
        path: "choicesignup",
        element: <SignupChoice />,
      },
      {
        path: "choicelogin",
        element: <LoginChoice />,
      },
    ],
  },
  {
    path: "/counsellor/",
    element: <CounsellorLayout />,
    children: [
      {
        path: "all",
        element: <CareerCounsellor />,
      },
      {
        path: "signup",
        element: <CounsellorSignup />,
      },
      {
        path: "login",
        element: <CounsellorLogin />,
      },
      {
        path: "forgot-password",
        element: <CounsellorForgotPassword />,
      },
      // {
      //   path: 'profile',
      //   element: <CounsellorProfile />
      // },
      {
        path: "bulk-insert",
        element: <AddCounsellors />,
      },
      {
        path: "dashboardcounsellor",
        element: <CounsellorDashboard />,
      },
    ],
  },
  {
    path: "/student/",
    element: <StudentLayout />,
    children: [
      {
        path: "signup",
        element: <StudentSignup />,
      },
      {
        path: "login",
        element: <StudentLogin />,
      },
      {
        path: "dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "forgot-password",
        element: <StudentForgotPassword />,
      },
    ],
  },
  {
    path: "/elevateu/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/elevateu/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/elevateu/admin/counsellor/:id",
    element: <CounsellorDetails />,
  },
  {
    path: "/StudentSlotBooking",
    element: <StudentSlotBooking />,
  },
]);

function App() {
  return  (
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
}

export default App;
