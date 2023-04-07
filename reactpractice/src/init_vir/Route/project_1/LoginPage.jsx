import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const login = () => {
        localStorage.setItem('login',true)
        navigate('/')
    }
    const navigate = useNavigate();

    useEffect( () => {
        let login = localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    } )

  return (
    <div>
      <h1> This is Login Page </h1>

      <div className='login'>
         <input type="text" placeholder='enter Username' />
         <br />
         <input type="text" placeholder='Password' />
         <br />
         <button onClick={login} > Submit </button>
      </div>
    </div>
  )
}

export default LoginPage
