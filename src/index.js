import {
    About,
    Drivers,
    Home,
    Vehicles
} from "./routes/Index";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import React from "react";
import "./App.css";

const AppLayout = () => (
    <React.Fragment>
        <header>
            <img src={require(`./logo.png`)} />
        </header>
        <div className={`content`}>
            <Navbar />
            <Outlet />
        </div>
    </React.Fragment>
);

const router = createBrowserRouter([
    {
        children: [
            {
                element: <Home />,
                path: `/`
            },
            {
                element: <Drivers />,
                path: `/drivers`
            },
            {
                element: <Vehicles />,
                path: `/vehicles`
            },
            {
                element: <About />,
                path: `/about`
            }
        ],
        element: <AppLayout />
    }
]);

createRoot(document.getElementById(`root`)).render(
    <RouterProvider router={router} />
);
