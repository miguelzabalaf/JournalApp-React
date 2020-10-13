import React from 'react'
import { Link } from 'react-router-dom'
import { FormHeader } from '../../components/forms/FormHeader'
import { InputText } from '../../components/forms/InputText'

export const LoginPage = () => {

  const inputs = [
    {
      id: "0",
      type: "email",
      placeholder: "Email",
      name: "email",
      autocomplete: "off"
    },
    {
      id: "1",
      type: "password",
      placeholder: "Password",
      name: "password",
      autocomplete: "off"
    }
  ]

  return (
    <div className="login">
      <FormHeader title="Sign in"/>
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
            Login
          </button>
        </div>
        <div className="btngoogle">
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
  )
}
