import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/newsletter', { email })
            .then(response => {
                setSuccess('Subscribed to newsletter!');
                setError('');
                setEmail(''); // Clear the email input
            })
            .catch(error => {
                setError('Error subscribing: ' + error.response?.data?.error || 'Unknown error');
                setSuccess('');
            });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto w-full">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="py-2 px-4 border border-gray-300 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                >
                    Subscribe
                </button>
            </form>
            {success && <p className="text-green-500 mt-4">{success}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
};

export default Newsletter;

