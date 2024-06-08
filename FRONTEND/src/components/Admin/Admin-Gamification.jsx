import React, { useState, useEffect } from "react";

const AdminGamification = () => {
    const [gamification, setGamification] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Start the POST operation
        fetch("http://localhost:8000/api/gamification/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include other headers like Authorization if required
            },
            body: JSON.stringify({ message: "Update gamification data" }) // Adjust this as necessary
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update gamification data');
            }
            return response.json(); // Assuming the server responds with JSON
        })
        .then(data => {
            console.log('Post operation successful:', data);
            // Proceed with the GET operation after POST
            return fetch("http://localhost:8000/api/gamification/", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Include other headers like Authorization if required
                }
            });
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok on GET');
            }
            return response.json();
        })
        .then(data => {
            setGamification(data);
            setLoading(false);
        })
        .catch(error => {
            setError("Error fetching data: " + error.message);
            setLoading(false);
        });
    }, []);

    // return (
    //     <div className="container mx-auto p-4">
    //         <h1 className="text-3xl font-bold mb-4 text-center">Gamification</h1>
    //         {loading ? (
    //             <div className="flex justify-center items-center">
    //                 <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    //                     <span className="visually-hidden">Loading...</span>
    //                 </div>
    //             </div>
    //         ) : error ? (
    //             <p className="text-red-500 text-center">{error}</p>
    //         ) : (
    //             <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    //                 <table className="w-full text-sm text-left text-gray-500">
    //                     <thead className="text-xs text-gray-700 uppercase bg-gray-50">
    //                         <tr>
    //                             <th scope="col" className="py-3 px-6">User Id</th>
    //                             <th scope="col" className="py-3 px-6">Name</th>
    //                             <th scope="col" className="py-3 px-6">Total Ads</th>
    //                             <th scope="col" className="py-3 px-6">Points</th>
    //                             <th scope="col" className="py-3 px-6">Level</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {gamification.map((item) => (
    //                             <tr key={item.user_id} className="bg-white border-b">
    //                                 <td className="py-4 px-6">{item.user_id}</td>
    //                                 <td className="py-4 px-6">{item.name}</td>
    //                                 <td className="py-4 px-6">{item.total_ads}</td>
    //                                 <td className="py-4 px-6">{item.points}</td>
    //                                 <td className="py-4 px-6">{item.level}</td>
    //                             </tr>
    //                         ))}
    //                     </tbody>
    //                 </table>
    //             </div>
    //         )}
    //     </div>
    // );
}

export default AdminGamification;
