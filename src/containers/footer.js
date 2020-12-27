import React from "react"
import { Footer } from "../components"

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Title>Questions? Contact us!</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Corporate Informations</Footer.Link>
                    <Footer.Link href="#">Netflix Originals!</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="#">About Us</Footer.Link>
                    <Footer.Link href="#">Help Centre</Footer.Link>
                    <Footer.Link href="#">Careers</Footer.Link>
                    <Footer.Link href="#">Terms Of Use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Redeem gift cards</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="#">Media Centre</Footer.Link>
                    <Footer.Link href="#">Buy gift cards</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences & GDPR</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                </Footer.Column>
                <Footer.Break />
                <Footer.Text>React Netflix Clone</Footer.Text>
            </Footer.Row>
        </Footer>
    )
}