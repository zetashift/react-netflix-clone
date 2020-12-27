import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/firebase"
import { Form } from "../components"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import * as ROUTES from "../constants/routes"

function SignIn() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    // Hooks make this React easily the source of truth
    const [error, setError] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    
    const isValid = password !== "" && emailAddress !== "";
    
    const handleSignIn = (ev) => {
        ev.preventDefault()
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
        })
        .catch((error) => {
            setEmailAddress("")
            setPassword("")
            setError(error.message)
        })
    }
    
    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title> Sign In </Form.Title>
                {error && <Form.Error> {error} </Form.Error>}
            
                <Form.Base onSubmit={handleSignIn} method="POST">
                    <Form.Input
                        placeholder="Email adress"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        type="password"
                        value={password}
                        autoComplete="off"
                        placeholder="Password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={!isValid} type="submit">
                        Sign In!
                    </Form.Submit>
                    
                    <Form.Text>
                        New to React Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.SmallText>
                        This page is protected by Google reCaptcha.
                    </Form.SmallText>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}

export default SignIn
