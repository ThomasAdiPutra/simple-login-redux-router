import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function UserLayout() {
  const auth = useSelector(state => state.authSlice);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      navigate('/login', { replace: true });
    }
    setIsLoaded(true);
  }, [auth.token, navigate]);

  if (!isLoaded) {
    return 'Loading...';
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
