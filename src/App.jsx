import "./styles.css";

import { HomePage } from "./HomePage/HomePage";
import { LoginPage } from "./LoginPage/LoginPage";
import { CustomerPage } from "./CustomerPage/CustomerPage";
import { OrderPage } from "./OrderPage/OrderPage";
import Navbar from "./Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {SupplierPage} from "./SupplierPage/SupplierPage.jsx";
import { DiscountPage } from "./DiscountPage/DiscountPage.jsx";
import {EmployeePage} from "./EmployeePage/EmployeePage.jsx";
import {ProductPage} from "./ProductPage/ProductPage.jsx";


export default function App() {
    const [setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(res => setUsers(res.data))
            .catch(err => console.error('API error:', err));
    }, []);
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/customer" element={<CustomerPage />} />
                <Route path="/orders" element={<OrderPage />} />
                <Route path="/supplier" element={<SupplierPage />} />
                <Route path="/discount" element={<DiscountPage />} />
                <Route path="/employees" element={<EmployeePage />} />
                <Route path="/products" element={<ProductPage />} />
            </Routes>

        </BrowserRouter>
    );
}

