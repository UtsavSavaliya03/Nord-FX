import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeData } from './Routes/RouteData.jsx';

export default function Main() {
    return (
        <Routes>
            {
                routeData?.map((route, index) => {
                    return (<Route key={index} path={route.path} element={<route.element />} />)
                })
            }
        </Routes>
    )
}   