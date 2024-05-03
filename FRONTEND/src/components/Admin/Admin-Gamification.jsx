import React, { useState, useEffect } from "react";

const AdminGamification = () => {
    const [gamification, setGamification] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/api/gamification")
            .then((response) => response.json())
            .then((data) => {
                setGamification(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error)); // Added error handling for the fetch operation
    }, []);

    return (
        <div className="media-library text-white min-h-screen py-10 relative">
            <h1 className="text-3xl font-bold mb-6 text-black">Gamification</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gamification.map((item) => ( // Changed from 'gamification' to 'item' to avoid shadowing
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default AdminGamification;
