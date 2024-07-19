'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

const roles = ["admin", "developer", "user"];

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role
  const router = useRouter();

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRole("user");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if username and password match the condition
    if (username === "Ankur" && password === "1234") {
      // Redirect to '/' route
      router.push("/");
    } else {
      // Your login logic here, e.g., show error message
      console.log("Invalid username or password");
    }

    // Reset form after submission (optional)
    handleReset();
  };

  return (
    <div className="flex justify-center items-center h-[480] w-[800px] p-8 bg-[#0a1c66]">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl px-8 pt-6 pb-4 mb-4 w-full"
      >
        <img
          src="https://static.wixstatic.com/media/abf3bf_155dcf18312d44fbb8c99405fe6446d0~mv2.png/v1/crop/x_164,y_104,w_752,h_769/fill/w_136,h_139,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(8)%20(1).png"
                  alt="logo"
                  className="h-24 fixed top-8 left-8"        />
        <h1 className="w-full text-center text-3xl font-bold mb-2 mt-8">Login</h1>
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700"
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
            className="shadow appearance-none border-2  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:border-blue-700 focus:outline-none focus:shadow-outline"
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
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
