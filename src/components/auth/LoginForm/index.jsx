import React, { useState } from "react";
import { FaCircleNotch, FaEye, FaEyeSlash, FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../pages/Auth/redux/action";
import {} from 'react-icons/fa';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.authSlice);

  const doSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="border p-10 rounded-md">
        <form onSubmit={doSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black w-full rounded-md p-1"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="font-semibold">Password</label>
            <div className="w-full flex border border-black rounded-md p-1">
              <input
                type={`${showPassword ? "text" : "password"}`}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 focus:outline-none"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="border px-5 py-1.5 rounded-lg flex items-center gap-1 bg-blue-500 text-white"
            disabled={auth.loading}
          >
            {auth.loading ?
              <>
                <FaCircleNotch className={`animate-spin ${auth.loading ? 'block' : 'hidden'}`} />
                Loading...
              </> :
              <>
                <FaSignInAlt />
                Login
              </>
            }
          </button>
          {auth.error && <p className="text-red-500">{auth.error}</p>}
        </form>
      </div>
    </div>
  );
}
