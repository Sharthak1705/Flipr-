import React, { useState } from 'react';
import Page from '../assets/image/home.svg';
import axios from 'axios';

function Landing() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/contact', formData)
      .then(response => {
        setSuccess('Contact form submitted!');
        setError('');
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          city: '',
        });
      })
      .catch(error => {
        setError('Error submitting contact form: ' + (error.response?.data?.message || 'Unknown error'));
        setSuccess('');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Page})`, marginTop: 0 }}
      >
        <div className="w-full flex justify-between items-center p-10">
          <div className="w-1/2">
            <h1 className="text-5xl font-extrabold text-black mb-4">
              Consultation, Design, & Marketing
            </h1>
          </div>
          <div className="bg-custom-blue shadow-md rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Get a Free Consultation
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <button type="submit" className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full">
                Submit
              </button>
            </form>
            {success && <p className="text-green-500 mt-2">{success}</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
