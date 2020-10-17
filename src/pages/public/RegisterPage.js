import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FormHeader } from '../../components/forms/FormHeader'
import { FormMessageError } from '../../components/forms/FormMessageError'
import { InputText } from '../../components/forms/InputText'
import { useForm } from '../../hooks/useForm'
import validator from "validator";

export const RegisterPage = () => {

  const initialState = {
    name: '',
    email: '',
    password: '',
    password2: ''
  }

  const [formValues, handleInputChange ] = useForm(initialState);
  
  const { name, email, password, password2 } = formValues;
  
  const [messageError, setMessageError] = useState({
    messageErrorVisible: false,
    messageErrorText: ''
  });
  
  const { messageErrorVisible, messageErrorText } = messageError;
  
  useEffect(() => {
    setMessageError({
      messageErrorVisible: false,
      messageErrorText: ''
    })
  }, [name, email, password, password2])

  const inputs = [
    {
      id: "0",
      type: "text",
      placeholder: "Name",
      name: "name",
      autocomplete: "off",
      value: name,
    },
    {
      id: "1",
      type: "email",
      placeholder: "Email",
      name: "email",
      autocomplete: "off",
      value: email,
      
    },
    {
      id: "2",
      type: "password",
      placeholder: "Password",
      name: "password",
      autocomplete: "off",
      value: password,
    },
    {
      id: "3",
      type: "password",
      placeholder: "Confirm password",
      name: "password2",
      autocomplete: "off",
      value: password2,
    }
  ]

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(`Email: ${email}, name: ${name}..`)
    if (isFormValid()) {

    }
  }

  const isFormValid = () => {
    if ( name.trim().length === 0) {
      setMessageError({
        messageErrorVisible: true,
        messageErrorText: 'Name is Requeried.'
      });
      return false;
    } else if ( !validator.isEmail( email ) ) {
      setMessageError({
        messageErrorVisible: true,
        messageErrorText: 'Email is not valid.'
      });
      return false;
    } else if ( password.trim().length < 6 || password !== password2 ) {
      setMessageError({
        messageErrorVisible: true,
        messageErrorText: 'Password should be at least 6 characters and match each other.'
      });
      return false;
    }
    return true;
  }

  return (
    <div className="register">
      <FormHeader title="Register"/>
      <form onSubmit={ handleRegister }>
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
        messageErrorVisible && <FormMessageError message={messageErrorText}/>
      }
      <div>
        <button className="btnprimary-large" type="submit">
          Sign in
        </button>
      </div>
      <div className="btngoogle">
        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
        <p>Sign in with Google</p>
      </div>
      <div className="linkform">
        <Link 
          to="/auth/login"
        >
          Already registered?
        </Link>
      </div>
    </form>
    </div>
  )
}
