import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const [sidebarData, setSidebarData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(`data/menu.json`,
            {
                headers: {
                    'Content-Type': `application/json`
                }
            })
            .then(response => response.json())
            .then(myJson => setSidebarData(myJson.data));
    };

    return (
        <nav className={`navMenu`}>
            <ul className={`navMenuItems`}>
                {
                    sidebarData.map((item, index) => (
                        <li className={`navText`}
                            key={index}
                        >
                            <Link to={item.url}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;
