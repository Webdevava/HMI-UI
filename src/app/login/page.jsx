'use client'
import { useState } from "react";

const roles = ["admin", "developer", "user"];

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRole("user");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic here, e.g., send data to backend
    console.log(`Username: ${username}, Password: ${password}, Role: ${role}`);
    // Reset form after submission (optional)
    handleReset();
  };

  return (
    <div className="flex justify-center items-center h-[480] p-14">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full"
      >
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
        </div>
        <div className="relative mb-4">
          <select
            className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
