import React from 'react';

const Dashboard: React.FC = () => {
    const userDataString = localStorage.getItem('userData');
    let userName = "";
    let email = "";
    if (userDataString !== null) {
        const userData = JSON.parse(userDataString);
        console.log(userData.id); // "1"
        userName = userData.name// "Avishek Jana"
        email = userData.email; // "avishek@example.com"
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
            <p>Name: {userName}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default Dashboard;