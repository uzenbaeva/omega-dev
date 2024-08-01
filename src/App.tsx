import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Vacancies from "./pages/Vacancies/Vacancies";
import Events from "./pages/Events/Events";
import Video from "./pages/Video/Video";
import Organizations from "./pages/Organizations/Organizations";
import Community from "./pages/Сommunity/Community";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Component/Login/login";
import Signup from "./Component/SignUp/signup";
import RouteProtector from "./Component/RouteProtect";
import AddVacancy from "./Component/Addvacancy/addVacancy";
import Header from "./Component/Header/Header";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/",
        element: <Header />,
    },
    {
        path: "/vacancies",
        element: <Vacancies />,
    },
    {
        path: "/events",
        element: <Events />,
    },
    {
        path: "/video",
        element: <Video />,
    },
    {
        path: "/organizations",
        element: <Organizations />,
    },
    {
        path: "/community",
        element: <Community />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/addVacancy",
        element: (
           <RouteProtector>
                <AddVacancy />
           </RouteProtector>
            
        )
    },
  
  
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
