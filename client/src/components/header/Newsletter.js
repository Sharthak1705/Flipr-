import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/subscription', { email })
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
        <div>
            <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="py-2 px-4 rounded-full text-black"
                />
                <button type="submit" className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full">
                    Subscribe
                </button>
            </form>
            {success && <p className="text-green-500 mt-2">{success}</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default Newsletter;
