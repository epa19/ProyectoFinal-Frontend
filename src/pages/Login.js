import React, { useState } from 'react';
import { checkAuthToken, login } from '../api/auth';
import {useForm} from '../hooks/useForm';

import '../css/Login.css';
function Login() {
  const {form, changed} = useForm({});
    const [message, setMessage] = useState('');
    
    checkAuthToken().then(data => {
        if(data.authorization === true){
            window.location.href = '/'
        }
      });

    const submitLoginForm = (e) => {
        e.preventDefault()
        login(form).then(data => {
            setMessage(data)
        });
    }
  return (
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui image header">
          <div class="content">
            Login
          </div>
        </h2>
        <form method="POST" onSubmit={ submitLoginForm } class="ui large form">
          <div class="ui stacked secondary  segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="email" placeholder="E-mail address"/>
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="Password"/>
              </div>
            </div>
            <button type="submit" class="ui primary button">
              Iniciar Sesión
            </button>
          </div>
          <div class="ui error message"></div>
        </form>
      </div>
    </div>
  )
}

function Message(props){
  const {message} = props;
  if(message){
      return(
          <div className='mb-4 alert alert-danger'>
              <div>{message}</div>
          </div> 
      );
  };
};

export default Login