import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Auth/Login.js";
import Registration from "./pages/Auth/Registration.js";
import App from "./App.js";
import BookInfo from "./pages/BookInfo/BookInfo.js";
import BorrowedBooks from "./pages/BorrowedBooks/BorrowedBooks.js";

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
        path: "/5",
        element: <BookInfo />,
      },
      {
        path: "/borrowed-books",
        element: <BorrowedBooks />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);
