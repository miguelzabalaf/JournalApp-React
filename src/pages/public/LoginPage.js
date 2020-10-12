import React from 'react'
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
      <FormHeader title="Login"/>
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
      </form>
    </div>
  )
}
