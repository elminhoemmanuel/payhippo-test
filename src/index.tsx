import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './styles/tailwind.css'
import Register from './pages/Register';
import * as serviceWorker from "./serviceWorker";
import { RegisterContextProvider } from './context/RegisterContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <RegisterContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
            </Routes>
        </BrowserRouter>
    </RegisterContextProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
