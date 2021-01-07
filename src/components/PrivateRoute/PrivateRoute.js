import React from 'react'
import { Route } from 'react-router-dom'
import TokenService from '../../services/token-services'
import history from '../../history'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Component {...componentProps} />
          : history.push('/')
      )}
    />
  )
}