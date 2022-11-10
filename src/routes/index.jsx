import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MovieCard } from "../Components/MovieCard/MovieCard";
import { MoviesGrid } from "../Components/MoviesGrid/MoviesGrid";
import Root from "../Components/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>No encontrado</h1>,
        children: [
            {
                path: "/",
                element: <MoviesGrid />,
            },
            {
                path: "/category/:categoryId",
                element: <MovieCard />,
            },
            {
                path: "/detail/:id",
                element: <></>,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;