import React, { useEffect, useState } from "react";

const Home = () => {
    const [searchInput, setSearchInput] = useState(``),
        [driverData, setDriverData] = useState([]),
        [filteredDriverData, setFilteredDriverData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(`data/drivers.json`,
            {
                headers: {
                    'Content-Type': `application/json`
                }
            })
            .then(response => response.json())
            .then(myJson => {
                setDriverData(myJson.data);
                setFilteredDriverData(myJson.data);
            });
    };

    const handleChange = e => {
        e.preventDefault();
        const input = e.target.value;

        if (input.length > 0) {
            const tempDriverData = driverData.filter(driver => (`${driver.forename} ${driver.surname}`).match(new RegExp(input, `i`)) || driver.vehicleRegistration.match(new RegExp(input, `i`)));

            setFilteredDriverData(tempDriverData);
        } else {
            setFilteredDriverData(driverData);
        }
        setSearchInput(input);
    };

    return (
        <div className={`home`}>
            <input className={`searchBar`}
                onChange={handleChange}
                placeholder={`Search here`}
                type={`text`}
                value={searchInput}
            />
            <table>
                <thead>
                    <tr>
                        <th rowSpan={2}>
                            Driver Name
                        </th>
                        <th rowSpan={2}>
                            Vehicle Reg
                        </th>
                        <th colSpan={5}>
                            Total Activity Duration (Minutes)
                        </th>
                        <th className={`noBorder smallHeader`}
                            rowSpan={2}
                        >
                            Mon
                        </th>
                        <th className={`noBorder smallHeader`}
                            rowSpan={2}
                        >
                            Tue
                        </th>
                        <th className={`noBorder smallHeader`}
                            rowSpan={2}
                        >
                            Wed
                        </th>
                        <th className={`noBorder smallHeader`}
                            rowSpan={2}
                        >
                            Thu
                        </th>
                        <th className={`noBorder smallHeader`}
                            rowSpan={2}
                        >
                            Fri
                        </th>
                        <th className={`noBorder smallHeader`}
                            rowSpan={2}
                        >
                            Sat
                        </th>
                        <th className={`noBorder smallHeader`}
                            rowSpan={2}
                        >
                            Sun
                        </th>
                    </tr>
                    <tr>
                        <th className={`smallHeader`}>Available</th>
                        <th className={`smallHeader`}>Drive</th>
                        <th className={`smallHeader`}>Rest</th>
                        <th className={`smallHeader`}>Work</th>
                        <th className={`smallHeader`}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDriverData.map((driver, index) => (
                        <tr key={index}>
                            <td>{driver.forename} {driver.surname}</td>
                            <td>{driver.vehicleRegistration}</td>
                            <td>{driver.traces.reduce((total, days) => total + days.activity.filter(day => day.type === `available`).reduce((sum, day) => sum + day.duration, 0), 0)}</td>
                            <td>{driver.traces.reduce((total, days) => total + days.activity.filter(day => day.type === `drive`).reduce((sum, day) => sum + day.duration, 0), 0)}</td>
                            <td>{driver.traces.reduce((total, days) => total + days.activity.filter(day => day.type === `rest`).reduce((sum, day) => sum + day.duration, 0), 0)}</td>
                            <td>{driver.traces.reduce((total, days) => total + days.activity.filter(day => day.type === `work`).reduce((sum, day) => sum + day.duration, 0), 0)}</td>
                            <td>{driver.traces.reduce((total, days) => total + days.activity.reduce((sum, day) => sum + day.duration, 0), 0)}</td>
                            <td><div className={`box ${driver.traces.some(traces => new Date(traces.date).getDay() === 1) ? `green` : ``}`} /></td>
                            <td><div className={`box ${driver.traces.some(traces => new Date(traces.date).getDay() === 2) ? `green` : ``}`} /></td>
                            <td><div className={`box ${driver.traces.some(traces => new Date(traces.date).getDay() === 3) ? `green` : ``}`} /></td>
                            <td><div className={`box ${driver.traces.some(traces => new Date(traces.date).getDay() === 4) ? `green` : ``}`} /></td>
                            <td><div className={`box ${driver.traces.some(traces => new Date(traces.date).getDay() === 5) ? `green` : ``}`} /></td>
                            <td><div className={`box ${driver.traces.some(traces => new Date(traces.date).getDay() === 6) ? `green` : ``}`} /></td>
                            <td><div className={`box ${driver.traces.some(traces => new Date(traces.date).getDay() === 0) ? `green` : ``}`} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
