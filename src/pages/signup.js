import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/firebase"
import { Form } from "../components"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import * as ROUTES from "../constants/routes"

function SignUp() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [firstName, setFirstName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    const isValid = firstName.length !== 0 && emailAddress.length !== 0 && password.length !== 0
    
    const handleSignup = (ev) => {
        ev.preventDefault()
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1
                })
                .then(() => {
                    history.push(ROUTES.BROWSE)
                })
            ).catch((error) => {
                setFirstName("")
                setEmailAddress("")
                setPassword("")
                setError(error.message)
            })
    }
    
    return (
        <>
        <HeaderContainer>
        <Form>
            <Form.Title>Sign Up!</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignup} method="POST">
                <Form.Input
                    placeholder="First Name"
                    value={firstName}
                    onChange={(ev) => setFirstName(ev.target.value)}    
                />
                <Form.Input
                    placeholder="Email Address"
                    value={emailAddress}
                    onChange={(ev) => setEmailAddress(ev.target.value)}
                />
                <Form.Input
                    type="password"
                    autoComplete="off"
                    placeholder="Password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                />
                <Form.Submit disabled={!isValid} type="submit">
                    Sign Up Now
                </Form.Submit>
                
                <Form.Text>
                    Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                </Form.Text>
                <Form.SmallText>
                    This page is protected by Google reCAPTCHA. 
                </Form.SmallText>
            </Form.Base>
        </Form>                
        </HeaderContainer>

        <FooterContainer />
        </>
    )
}

export default SignUp