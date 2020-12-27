import React from "react"
import faqsData from "../fixtures/faqs.json"
import { Accordion, OptForm } from "../components"


export function FaqsContainer({ children, ...restOfProps }) {
    return (
        <Accordion {...restOfProps}>
            <Accordion.Title> Frequently Asked Questions </Accordion.Title>
            <Accordion.Frame>
            { faqsData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>                
            ))}
            </Accordion.Frame>
            
            <OptForm>
                <OptForm.Input placeholder="Email Adress" />
                <OptForm.Button>Try it now!</OptForm.Button>
                <OptForm.Text>Ready to start watching? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}

