import React from 'react'
import { Link } from 'react-router-dom'
import { FormHeader } from '../../components/forms/FormHeader'
import { InputText } from '../../components/forms/InputText'

export const RegisterPage = () => {

  const inputs = [
    {
      id: "0",
      type: "text",
      placeholder: "Name",
      name: "name",
      autocomplete: "off"
    },
    {
      id: "1",
      type: "email",
      placeholder: "Email",
      name: "email",
      autocomplete: "off"
    },
    {
      id: "2",
      type: "password",
      placeholder: "Password",
      name: "password",
      autocomplete: "off"
    },
    {
      id: "2",
      type: "password",
      placeholder: "Confirm password",
      name: "password2",
      autocomplete: "off"
    }
  ]

  return (
    <div className="register">
      <FormHeader title="Register"/>
      <form>
      {
        inputs.map( input => (
          <InputText 
            key={ input.id } 
            type={ input.type } 
            placeholder={ input.placeholder } 
            name={ input.name } 
            autocomplete={ input.autocomplete }
            />
        ))
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
