import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

export default function Address() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="*" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}