import "./HomePage.css";
import Navbar from "../Navbar/Navbar.jsx";
import vector200 from './assets/vector-2000.svg';
import vector2001 from './assets/vector-2001.svg';
import vector2002 from './assets/vector-2002.svg';
import vector2003 from './assets/vector-2003.svg';
import frame0 from './assets/frame-4273188170.svg';
import frame1 from './assets/frame-4273188171.svg';
import frame2 from './assets/frame-4273188172.svg';
import {useEffect, useState} from 'react';

export const HomePage = ({ className, ...props }) => {
    const [product, setFormData] = useState({
        new_Product_ID: '',
        new_name: '',
        new_category: '',
        new_retail_price: '',
        new_purchasing_price: '',
        new_ratings: '',
        new_Supplier_ID: '',
        new_Discount_ID: ''
    });
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/home/employees')
            .then((res) => res.json())
            .then((data) => {
                console.log("Employee data:", data);  // 👈 check if this logs correctly
                console.log("Employee data:", data);  // 👈 check if this logs correctly
                setEmployees(data);
            })
            .catch((err) => console.error('Error fetching employees:', err));
    }, []);

    const handleChange = (field) => (e) => {
        setFormData({ ...product, [field]: e.target.value });
    };

    const handleCategorySelect = (category) => {
        setFormData({ ...product, new_category: category });
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch('http://localhost:3001/home/insert', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            });

            if (!res.ok) {
                const error = await res.json();
                console.error("Backend error:", error);
                alert('Failed to submit: ' + error.error);
                return;
            }

            const data = await res.json();
            alert('Product added!');
            console.log(data);
        } catch (error) {
            console.error('Submit error:', error);
            alert('Failed to submit product: ' + error.message);
        }
    };
    return (
        <div className={"home-page " + className}>
            <div className="section">
                <div className="avatar"></div>
                <div className="container">
                    <div className="title2">Store Owner </div>
                    <div className="selection">
                        <div className="label-normal">
                            <div className="label-text">Owner </div>
                        </div>
                    </div>
                    <div className="description">
                        View store services status and profitability{" "}
                    </div>
                </div>
                <div className="button"></div>
                <img className="vector-200" src={vector200} />
            </div>
            <div className="list">
                <div className="container2">
                    <div className="title3">Employee Information </div>
                    <div className="description2">Manage and monitor employees </div>
                    <div className="seconday">
                        <div className="title4">Manage More Employees </div>
                    </div>
                </div>
                <div className="list2">
                    <div className="row">
                        {employees.map((emp, index) => (
                            <div className="item" key={index}>
                                <div className="frame">
                                    <div className="icon">👤</div>
                                </div>
                                <div className="frame-427318906">
                                    <div className="subtitle">{emp.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <img className="vector-2002" src={vector2002} />
            </div>
            <div className="form">
                <div className="container3">
                    <div className="title6">Add New Product </div>
                    <div className="description3">
                        Fill in the details for new product{" "}
                    </div>
                </div>
                <div className="list3">
                    <div className="row2">
                        <div className="input">
                            <div className="title7">Product Name </div>
                            <input
                                className="textfield2"
                                placeholder="Enter product name"
                                value={product.new_name}
                                onChange={handleChange("new_name")}
                            />
                        </div>
                    </div>
                    <div className="row2">
                        <div className="input">
                            <div className="title7">Retail Price </div>
                            <input
                                className="textfield2"
                                type="number"
                                placeholder="Enter retail price"
                                value={product.new_retail_price}
                                onChange={handleChange("new_retail_price")}
                            />
                        </div>
                    </div>
                    <div className="row2">
                        <div className="input">
                            <div className="title7">Purchase Price </div>
                            <input
                                className="textfield2"
                                type="number"
                                placeholder="Enter purchase price"
                                value={product.new_purchasing_price}
                                onChange={handleChange("new_purchasing_price")}
                            />
                        </div>
                    </div>
                    <div className="row2">
                        <div className="input">
                            <div className="title8">Supplier </div>
                            <input
                                className="textfield2"
                                type="number"
                                placeholder="Enter supplier ID"
                                value={product.new_Supplier_ID}
                                onChange={handleChange("new_Supplier_ID")}
                            />
                        </div>
                    </div>
                    <div className="row2">
                        <div className="selection2">
                            <div className="title7">Category </div>
                            <div className="chip-group">
                                {["Electronics", "Clothing", "Home Goods"].map((cat) => (
                                    <div className="chip" key={cat} onClick={() => handleCategorySelect(cat)}>
                                        <div className="text3">{cat}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="button2">
                        <div className="primary" onClick={handleSubmit}>
                            <div className="title9">Submit </div>
                        </div>
                    </div>
                </div>
                <img className="vector-2003" src={vector2003} />
            </div>
            <div className="section2">
                <div className="container4">
                    <div className="title12">Contact Us: buyaozhaowomen@store.com </div>
                    <div className="title13">Copyright © 2025 Store Management </div>
                </div>
            </div>
        </div>
    );
};
