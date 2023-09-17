import React, { useEffect } from 'react'
import LoginForm from '../../components/auth/LoginForm'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const auth = useSelector(state => state.authSlice);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) {
      navigate('/', { replace: true });
    }
    setIsLoaded(true);
  }, [auth.token, navigate]);
  
  return (
    <div>
      {isLoaded ? <LoginForm /> : 'Loading...'}
    </div>
  )
}
