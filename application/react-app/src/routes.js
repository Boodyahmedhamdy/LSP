import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Auth/Login.js";
import Registration from "./pages/Auth/Registration.js";
import App from "./App.js";
import BookInfo from "./pages/BookInfo/BookInfo.js";
import BorrowedBooks from "./pages/BorrowedBooks/BorrowedBooks.js";
import Start from "./pages/Home/Start.js";
import ManageUsers from "./pages/ManageUsers/ManageUsers.js";
import ManageBorrowingRequests from "./pages/ManageBorrowingRequests/ManageBorrowingRequests.js";
import AddBook from "./pages/ManageBooks/AddBook.js";
import UpdateBook from "./pages/ManageBooks/UpdateBook.js";
import ManageBooks from "./pages/ManageBooks/ManageBooks.js";
import AboutUs from "./pages/About Us/AboutUs.js";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: ":id",
        element: <BookInfo />,
      },
      {
        path: "/borrowed-books",
        element: <BorrowedBooks />,
      },
      {
        path: "/Start",
        element: <Start />,
      },
      {
        path: "/ManageBorrowingRequests",
        element: <ManageBorrowingRequests />,
      },
      {
        path: "/ManageBooks",
        children: [
          {
            path: "",
            element: <ManageBooks />,
          },
          {
            path: "add",
            element: <AddBook />,
          },
          {
            path: ":id",
            element: <UpdateBook />,
          },
        ],
      },
      {
        path: "/ManageUsers",
        element: <ManageUsers />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);
