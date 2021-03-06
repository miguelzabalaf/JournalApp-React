import React from 'react';
import { Link } from 'react-router-dom';
import { FormHeader } from '../../components/forms/FormHeader';
import { InputText } from '../../components/forms/InputText';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth';
import { FormMessageError } from '../../components/forms/FormMessageError';

export const LoginPage = () => {
  
  const dispatch = useDispatch();

  const initialState = {
    email: '',
    password: ''
  }

  const { msgError, loading } = useSelector(state => state.ui)

  const [ formValues, handleInputChange ] = useForm(initialState);

  const { email, password } = formValues;

  const inputs = [
    {
      id: "0",
      type: "email",
      placeholder: "Email",
      name: "email",
      autocomplete: "off",
      value: email
    },
    {
      id: "1",
      type: "password",
      placeholder: "Password",
      name: "password",
      autocomplete: "off",
      value: password
    }
  ];
  
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword(email, password))
  };

  const handleLoginWithGoogle = () => {
    dispatch(startGoogleLogin());
  }

  return (
    <div className="login">
      <FormHeader title="Login"/>
      <form onSubmit={ handleLogin }>
        {
          inputs.map( input => (
            <InputText 
              key={ input.id } 
              type={ input.type } 
              placeholder={ input.placeholder } 
              name={ input.name } 
              autocomplete={ input.autocomplete }
              value={ input.value }
              onChange={ handleInputChange }
              />
          ))
        }
        {
          msgError && <FormMessageError message={ msgError } />
        }
        <div>
          <button 
            className="btnprimary-large" 
            type="submit"
            style={{ opacity: `${ loading ? 0.5 : 1 }` }}
            disabled={ loading }
            >
            Login
          </button>
        </div>
        <div 
          className="btngoogle"
          onClick={ handleLoginWithGoogle }
          >
          <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
          <p>Login with Google</p>
        </div>
        <div className="linkform">
          <Link 
            to="/auth/register"
          >
            Create new acount
          </Link>
        </div>
      </form>
    </div>
  );
};
