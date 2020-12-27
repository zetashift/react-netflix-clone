import React from "react"
import { Route, Redirect } from "react-router-dom"

// These are just functional components! 
export function IsUserRedirect({ user, loggedInPath, children, ...restOfProps }) {
    return (
        <Route
            {...restOfProps}
            render={() => {
                if (!user) return children
                if (user) {
                    return <Redirect to={{ pathname: loggedInPath }} />
                }   
                
                return null }   
            } 
        />
    )
}

export function ProtectedRoute({ user, children, ...restOfProps }) {
    return (
        <Route
            {...restOfProps}
            render={({ location }) => {
                if (user) return children
                if (!user) return (
                    <Redirect to={{ pathname: "signin", state: { from: location } }} />
                )
                return null
            }} 
        />
    )
}