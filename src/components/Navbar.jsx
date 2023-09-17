import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../pages/Auth/redux/slice';
import { Link } from 'react-router-dom';
import { FaHome, FaSignOutAlt, FaUser } from 'react-icons/fa';

export default function Navbar() {
  const dispatch = useDispatch();

  const doLogout = () => {
    dispatch(logout());
  }

  return (
    <div className='border-b flex xl:justify-center py-3'>
      <div className='flex justify-between w-full xl:w-[90%] px-2 xl:px-0'>
        <ul className='flex gap-4'>
          <li>
            <Link to='/' className='flex gap-1 items-center'>
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to='/profile' className='flex gap-1 items-center'>
              <FaUser />
              Profile
            </Link>
          </li>
        </ul>
        <button onClick={doLogout} className='flex items-center gap-1'>
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  )
}
