import React from "react"
import { FaqsContainer } from "../containers/faqs"
import { JumbotronContainer } from "../containers/jumbotron"
import { FooterContainer } from "../containers/footer"
import { HeaderContainer } from "../containers/header"
import { Feature, OptForm } from "../components"

function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV shows and React goodiness</Feature.Title>
                    <Feature.SubTitle>React anywhere. React at any time.</Feature.SubTitle>

                    <OptForm>
                        <OptForm.Input placeholder="Email Adress" />
                        <OptForm.Button>Try it now!</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to start watching? Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}


export default Home
