import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { base_url as base } from "../../config.js";

import App from "../App.jsx";
import NotFound from "./notfound.jsx";
import Home from "../pages/home.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: <NotFound des="/home"/>,
            children: [
                {
                    index: true,
                    element: <Navigate to="home" replace />
                },
                {
                    path: "home",
                    element: <Home />
                }
            ]
        },
        {
            path: "*",
            element: <NotFound des="/home"/>
        }
    ],
    {
        basename: base
    }
);

function BaseInjector({ base }) {
    useEffect(() => {
        let baseElement = document.querySelector("base");
        if (!baseElement) {
            baseElement = document.createElement("base");
            document.head.appendChild(baseElement);
        }
        baseElement.setAttribute("href", base);
    }, [base]);
    return null;
}

const AppRouter = () => (
    <>
        <BaseInjector base={base} />
        <RouterProvider router={router} />
    </>
);

export default AppRouter;