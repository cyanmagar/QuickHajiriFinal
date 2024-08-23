import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav'; // Import the Nav component
import backgroundVideo from '../../assets/Bg.mp4';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      navigate('/admin/dashboard');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="min-h-screen relative z-10">
        <Nav /> {/* Use the Nav component here */}
        <main className="flex flex-col lg:flex-row justify-between items-center container mx-auto px-4 py-16">
          <div className="text-white max-w-lg lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-5xl font-bold mb-4">Instant Attendance, Zero Hassle</h1>
            <p className="mb-8">Experience seamless attendance tracking that keeps you connected and organized, no matter where you are. <br />Embrace the future of attendance management today!</p>
            <button className="bg-orange-600 text-white py-2 px-5 rounded-lg">JOIN US</button>
          </div>
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <div className="bg-black bg-opacity-80 p-8 rounded-lg max-w-sm w-80">
              <form id="login-form" className="flex flex-col" onSubmit={handleSubmit}>
                <h2 className="text-white text-2xl mb-4">Login Here</h2>
                <label htmlFor="username" className="text-white mb-1">Username</label>
                <input
                  type="text"
                  id="username"
                  className="p-3 mb-4 bg-gray-300 text-black rounded-lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password" className="text-white mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  className="p-3 mb-4 bg-gray-300 text-black rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex items-center mb-0">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-white">Remember me</label>
                </div>
                <button type="submit" className="bg-orange-600 text-white mt-8 py-3 rounded-lg">Login</button>
                <p className="text-white mt-2 text-center">
                  Forget Password?
                </p>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
